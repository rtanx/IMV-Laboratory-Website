import { useQuery } from 'react-query';
import { supabase } from '../utils/supabaseClient';


const getHead = async () => {
    const { data, error } = await supabase.from('head').select();
    if (error) throw new Error(error.message);
    return data;
};

export const useHead = () => {
    return useQuery('head', getHead);
};

const getHeadById = async userId => {
    const { data, error } = await supabase
        .from('head')
        .select()
        .eq('uuid', userId)
        .single();
    if (error) throw new Error(error.message);
    return data;
};

export const useHeadById = userId => {
    return useQuery('head', () => getHeadById(userId));
};
