import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const inputsInfo = [
  {
    id: 1,
    type: "text",
    placeholder: "First Name",
    name: "firstName",
  },
  {
    id: 2,
    type: "text",
    placeholder: "Last Name",
    name: "lastName",
  },
  {
    id: 3,
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    id: 4,
    type: "password",
    placeholder: "password",
    name: "password",
  },
];

export default function Register() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full flex justify-center py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center bg-gray-300 border-1 border-[black] p-25
         my-1 rounded-3xl text-center"
      >
        {inputsInfo.map((e) => (
          <div key={e.id}>
            <Input
              type={e.type}
              placeholder={e.placeholder}
              className="border-1 border-[black] p-3 my-1 rounded-3xl text-center"
              control={control}
              name={e.name}
            />
          </div>
        ))}
        <Button
          text="Click Me"
          className="bg-sky-500 p-3 my-1 rounded-3xl text-center w-[150px]"
        ></Button>
      </form>
    </section>
  );
}
