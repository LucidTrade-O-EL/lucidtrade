import { NavigateFunction } from "react-router-dom";
import { ScreenRoutes } from "./App/Routes";

export interface NavigateApiData {
  navigate: boolean,
  destination: ScreenRoutes,
  navigation: NavigateFunction
}

export type ApiData = LoginApiData | SignUpApiData | ForgotPasswordApiData;

interface LoginApiData {
  email: string;
  password: string;
}

interface SignUpApiData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  code?: string;
}

interface ForgotPasswordApiData {
  email: string;
}

enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE'
}

interface APIInterface {
  post(url: string, data: ApiData, navigate: NavigateApiData, location: string): Promise<void>;
}

export class API implements APIInterface {

  _baseUrl = 'http://localhost:8080/api/';

  public async post(
    url: string,
    data: ApiData,
    navigate: NavigateApiData,
    location: string) {

    try {

      const response = await fetch(`${this._baseUrl}${url}`, {
        method: ApiMethods.POST,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json(); // Assuming the server responds with JSON

      console.log(responseData); // Logging the response to the console
      navigate.navigation(navigate.destination, { state: data });

      // Here you could handle redirection or update local state based on the response
    } catch (error) {
      console.log(`Location: ${location}`);
      console.log(JSON.stringify(error));
    }
  }
}