import { useQuery } from 'react-query';
import { supabase } from '../utils/supabaseClient';


const getAlumni = async () => {
    const { data, error } = await supabase.from('alumni').select();
    if (error) throw new Error(error.message);
    // const sortedData = sortByRoles(data);
    // console.log(sortedData);
    return data;
};

export const useAlumni = () => {
    return useQuery('alumni', getAlumni);
};

const getAlumniById = async userId => {
    const { data, error } = await supabase
        .from('alumni')
        .select()
        .eq('uuid', userId)
        .single();
    if (error) throw new Error(error.message);
    return data;
};

export const useAlumniById = userId => {
    return useQuery('alumni', () => getAlumniById(userId));
};
