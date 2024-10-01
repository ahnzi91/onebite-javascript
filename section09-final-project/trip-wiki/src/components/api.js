const API_URL = "https://trip-wiki-api.vercel.app/";

// App.js 파일에서 모듈로 사용할 수 있는 함수
export const request = async (startIndex, region, sortBy, searchWord) => {
  try {
    let url = `${API_URL}`;
    // region이라는 값이 존재하고 region의 값이 ALL과 동일하지 않았을 경우 로직
    if (region && region !== "ALL") {
      url += `${region}?start=${startIndex}`;
    } else {
      url += `?start=${startIndex}`;
    }

    if (sortBy) {
      url += `&sort=${sortBy}`;
    }

    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    console.log(url);

    // API 호출
    const response = await fetch(url);
    if (response) {
      let data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestCityDetail = async (cityId) => {
  try {
    const response = await fetch(`${API_URL}city/${cityId}`);
    if (response) {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
