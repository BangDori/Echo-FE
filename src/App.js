import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import ErrorPage from '@pages/Error';

import HomeRootLayout from '@pages/HomeRootLayout';
import HomePage, { loader as postsLoader } from '@pages/home/Home';
import PostDetailPage, {
  loader as postDetailLoader,
} from '@pages/home/PostDetail';
import ProfilePage, { loader as profileLoader } from '@pages/home/Profile';
import NotificationPage from '@pages/home/Notification';
import NotePage from '@pages/home/Note';

import AuthenticationPage from '@pages/auth/Authentication';
import { loader as logoutLoader } from '@pages/auth/Logout';
import SignInPage, { action as signInAction } from '@pages/auth/SignIn';
import SignUpPage, { action as signUpAction } from '@pages/auth/SignUp';
import AccountPage from '@pages/auth/Account';
import SearchIDPage, { action as searchIDAction } from '@pages/auth/SearchID';
import SearchPWDPage, {
  action as searchPWDAction,
} from '@pages/auth/SearchPWD';

import StyledApp from '@styles/App-styled';
import { tokenLoader, checkTokenLoader, checkIsTokenLoader } from '@utils/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        path: '/',
        element: <HomeRootLayout />,
        loader: checkTokenLoader,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: postsLoader,
          },
          {
            path: ':postId',
            id: 'post-detail',
            element: <PostDetailPage />,
            loader: postDetailLoader,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
            loader: profileLoader,
          },
          {
            path: 'notification',
            element: <NotificationPage />,
          },
          {
            path: 'note',
            element: <NotePage />,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        children: [
          {
            path: 'logout',
            loader: logoutLoader,
          },
          {
            path: 'signin',
            element: <SignInPage />,
            loader: checkIsTokenLoader,
            action: signInAction,
          },
          {
            path: 'signup',
            element: <SignUpPage />,
            action: signUpAction,
          },
          {
            path: 'account',
            element: <AccountPage />,
            children: [
              {
                path: 'id',
                element: <SearchIDPage />,
                action: searchIDAction,
              },
              {
                path: 'password',
                element: <SearchPWDPage />,
                action: searchPWDAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
};

export default App;
