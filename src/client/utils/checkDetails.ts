import supabaseClient from './supabaseClient';

const checkDetails = async (user: string, type: string, query: string, table: string) => {
    const { data, error } = await supabaseClient
        .from(table)
        .select(query)
        .eq(type, user)
        .single();

    if(error) return error;
    else return data;
}

export default checkDetails;