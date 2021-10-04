import Layout from "@/components/Layout";

import { Tabs } from "antd";
import NormalQuestion from "@/features/question/components/NormalQuestion";

const { TabPane } = Tabs;

function CreateQuestion() {
  return (
    <Layout>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Câu hỏi trắc nghiệm " key="1">
          <NormalQuestion />
        </TabPane>
        <TabPane tab="Câu hỏi dạng ghép từ" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Câu hỏi dạng điền từ" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Layout>
  );
}

export default CreateQuestion;
