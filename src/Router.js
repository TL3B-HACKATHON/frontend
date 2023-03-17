import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from "react-router-dom";

import { AuthLayout } from "./components/AuthLayout";
import { HomeLayout } from "./components/HomeLayout";
import { ProtectedLayout } from "./components/ProtectedLayout";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import MedicalProfile from "./pages/MedicalProfile";

// ideally this would be an API call to server to get logged in user data
const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="stats" element={<ProfilePage />} />
        <Route path="medical-profile/:userId" element={<MedicalProfile />} />
        <Route path="patients" element={<ProfilePage />} />
        <Route path="reports" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);

export default router;
