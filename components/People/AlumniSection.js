import PersonCard from './PersonCard';
import Loading from '../Loading';
import { useAlumni } from '../../hooks/useAlumni';

const AlumniSection = () => {
    const { data: alumni, isLoading } = useAlumni();

    if (isLoading) return <Loading />;
    return (
        <div className='px-4 py-8 w-full'>
            <h1 className='text-2xl text-center font-bold'>Meet Our Alumni</h1>
            <div className='grid md:grid-cols-4 gap-8 mt-12'>
                {alumni && alumni.map && alumni?.map((person, idx) => (
                    <PersonCard person={person} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default AlumniSection;

