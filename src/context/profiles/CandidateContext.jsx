import { createContext, useContext } from "react";
import { registerCandidateRequest } from "../../api/candidate.api";
import { profileCandidateRequest } from "../../api/profile.api";
const CandidateContext = createContext()

export function CandidateProvider({children}){

    const registerCandidate = async(candidate) => {
      try {
        const res = await registerCandidateRequest(candidate)
        return res;
      } catch (error) {
        console.log('Error al registrar candidate',error)
      }
    }
    const profileCandidate = async () => {
      try {
        const res = await profileCandidateRequest();
        return res;
      } catch (error) {
        console.log(error);
      }
    };

    return(
        <CandidateContext.Provider value={{ registerCandidate,profileCandidate}}>
            {children}
        </CandidateContext.Provider>
    )
}

export function UseCandidate() {
    const context = useContext(CandidateContext);
    if(!context){
        throw new Error('UseCandidate debe usarse dentro de un provider')
    }
    return context;
}