import { render, screen } from "@testing-library/react";
import RestaurantCard, {withIsOpenLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});


// it("should render RestaurantCard component with Open Label", () => {
//     const MockedRestaurantCard = withIsOpenLabel(RestaurantCard);
  
//     render(<MockedRestaurantCard resData={MOCK_DATA} />);
  
//     const openLabel = screen.getByText("Open");
//     console.log(openLabel);
//     expect(openLabel).toBeInTheDocument();
  
//     expect(RestaurantCard).toHaveBeenCalledWith({
//         resData: { info: MOCK_DATA },
//       });
// });