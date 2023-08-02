import { View } from "@tarojs/components";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import View1 from "./View1";
import View2 from "./View2";
import "./index.less";

const Index = () => {
  return (
    <BrowserRouter>
      <View className='drawer-box'>
        <View className='box-item'>
          <Link
            to='/pages/router/index/view1?a=1&b=2'
            //@ts-ignore
            as='view'
          >
            view1
          </Link>
        </View>
        <View className='box-item'>
          <Link
            to='/pages/router/index/view2#a=3&b=4'
            //@ts-ignore
            as='view'
          >
            view2
          </Link>
        </View>
      </View>

      <Routes>
        <Route path='/pages/router/index/view1' element={<View1 />}></Route>
        <Route path='/pages/router/index/view2' element={<View2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
