import { render, screen } from "@testing-library/react";

import DashboardCard from "./DashBoardCard";

describe(

"DashboardCard",

()=>{

it(

"renders title and value",

()=>{

render(

<DashboardCard

title="Customers"

value={10}

/>

);

expect(

screen.getByText(

"Customers"

)

).toBeInTheDocument();

expect(

screen.getByText(

"10"

)

).toBeInTheDocument();

});

});