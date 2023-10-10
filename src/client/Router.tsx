import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import InteractiveForm from './components/InteractiveForm/InteractiveForm'
import Admin from './components/Admin/Admin'
import Contact from './components/ContactPage/Contact'
import EditQuestions from './components/Admin/EditQuestions/EditQuestions'
import RenderEditQuestions from './components/Admin/EditQuestions/RenderEditQuestions'
import EditResults from './components/Admin/EditResults/EditResults'
import RenderEditResults from './components/Admin/EditResults/RenderEditResults'
import EditRecommendations from './components/Admin/EditRecommendations/EditRecommendations'
import RenderEditRecommendations from './components/Admin/EditRecommendations/RenderEditRecommenstations'
import RenderEditSurvey from './components/Admin/EditSurvey/RenderEditSurvey'
import RootBoundary from './components/Errors/RootBoundary'
import NotFound from './components/Errors/NotFound'

import { PUBLIC_URL } from '../config'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <RootBoundary />,
      children: [
        {
          index: true,
          element: <InteractiveForm />,
          errorElement: <RootBoundary />,
        },
        {
          path: '/contact',
          element: <Contact />,
          errorElement: <RootBoundary />,
        },
        {
          path: '/admin',
          element: <Admin />,
          errorElement: <RootBoundary />,
          children: [
            {
              index: true,
              element: <RenderEditSurvey />,
            },
            {
              path: 'edit-questions',
              element: <RenderEditQuestions />,
              children: [
                {
                  path: ':questionId',
                  element: <EditQuestions />,
                },
              ],
            },
            {
              path: 'edit-results/',
              element: <RenderEditResults />,
              children: [
                {
                  path: ':questionId/:dimensionId?',
                  element: <EditResults />,
                },
              ],
            },
            {
              path: 'edit-recommendations',
              element: <RenderEditRecommendations />,
              children: [
                {
                  path: ':recommendationId',
                  element: <EditRecommendations />,
                },
              ],
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: PUBLIC_URL,
  }
)

const Router = () => <RouterProvider router={router} />

export default Router
