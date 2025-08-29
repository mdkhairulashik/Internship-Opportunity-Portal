import { setAllInternships } from '@/redux/internshipSlice'
import { INTERNSHIP_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useGetAllInternships = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store => store.internship);
    useEffect(() =>{
        const fetchAllInternships = async() => {
            try {
                const res = await axios.get(`${INTERNSHIP_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
                if (res.data.success){
                    dispatch(setAllInternships(res.data.internships));

                }
            } catch (error) {
                console.log(error);
                
                
            }
        }
        fetchAllInternships();
    },[])
 
}

export default useGetAllInternships