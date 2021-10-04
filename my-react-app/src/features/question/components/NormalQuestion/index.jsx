import useCategories from "@/hooks/useCategories";
import { Button, Form, Select, Input, Radio } from "antd";
import { useForm, Controller, useFieldArray } from "react-hook-form";

const { Option } = Select;
const { TextArea } = Input;

function NormalQuestion() {
  const categories = useCategories();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      answers: ["Tuan", "Nguyen", "Van", "hihi"],
    },
  });

  const { fields } = useFieldArray({
    name: "answers",
    control,
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <div className={"mt-6"}>
            <Controller
              control={control}
              name={"category_id"}
              render={({ field }) => (
                <Form.Item
                // validateStatus="error"
                // help="Should be combination of numbers & alphabets"
                >
                  <div>Chủ đề</div>
                  <Select
                    onChange={field.onChange}
                    value={field.value}
                    showSearch
                    optionFilterProp="children"
                    className={"w-full"}
                    placeholder={"Chọn chủ đề"}
                  >
                    {categories?.data?.map((category) => (
                      <Option key={category.id}>{category.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
            />
          </div>

          <div className={"mt-6"}>
            <div>Câu hỏi</div>
            <Controller
              render={({ field }) => <Input rows={2} {...field} />}
              control={control}
              name={"name"}
            />
          </div>

          <div className={"mt-6"}>
            <div>Nội dung câu hỏi</div>
            <Controller
              render={({ field }) => <Input rows={2} {...field} />}
              control={control}
              name={"questions"}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Controller
            control={control}
            name={"correct_answers"}
            render={({ field: fieldRadio }) => (
              <Radio.Group {...fieldRadio} className={"w-full"}>
                {fields.map((item, index) => (
                  <Radio key={item.id} value={index}>
                    <Controller
                      control={control}
                      name={`answers.${index}`}
                      render={({ field }) => <Input rows={2} {...field} />}
                    />
                  </Radio>
                ))}
              </Radio.Group>
            )}
          />
        </div>

        <div className={"mt-10"}>
          <Button htmlType={"submit"}>Thêm mới</Button>
        </div>
      </form>
    </div>
  );
}

export default NormalQuestion;
