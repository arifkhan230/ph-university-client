import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemester";

const AcademicSemester = () => {
  const { isLoading, data } = useGetAllSemestersQuery(undefined);

  console.log(data);

  return (
    <div>
      <h1>This is AcademicSemester</h1>
    </div>
  );
};

export default AcademicSemester;
