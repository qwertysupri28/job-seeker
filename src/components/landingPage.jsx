import Chart from "./Chart";
import FeaturedInfo from "./featuredInfo";
import { userData } from "../dummyData";
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      {/* <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}