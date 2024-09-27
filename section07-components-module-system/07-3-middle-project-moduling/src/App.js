import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    currentTab: "all",
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: "",
    // onClick()
    // 1. 버튼이 클릭 될 때 실행되는 함수.
    // 2. 버튼을 누르면 currentTab이라는 상태를 눌린 버튼의 값으로 변경 시켜야 한다.
    // 3. 눌린 버튼의 상태에 맞는 API를 호출해 알맞은 데이터를 가져와야 한다.
    // 4. 눌린 버튼에 대한 값은 name이라는 매개변수로 전달받는다.
    onClick: async (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name),
      });
    },
  });
  const content = new Content();

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };
  // 웹 페이지에 초기 상태값을 설정해주는 init 함수 추가
  const init = async () => {
    try {
      const initialPhotos = await request();
      this.setState({
        ...this.setState,
        photos: initialPhotos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  init();
}
