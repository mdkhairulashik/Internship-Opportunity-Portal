import { setAllAppliedInternships } from "@/redux/internshipSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAppliedInternships = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        const fetchAppliedInternships = async() => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`,{withCredentials:true});
                console.log(res.data);
                if (res.data.success){
                    dispatch(setAllAppliedInternships(res.data.application));

                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchAppliedInternships();
    },[])
};
export default useGetAppliedInternships;