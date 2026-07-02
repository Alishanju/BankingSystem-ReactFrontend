import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";

interface Props {
    children: React.ReactNode;
}

function TestProvider({ children }: Props) {

    return (

        <Provider store={store}>

            <BrowserRouter>

                {children}

            </BrowserRouter>

        </Provider>

    );

}

export default TestProvider;