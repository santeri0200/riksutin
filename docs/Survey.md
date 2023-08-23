# Survey documentation

The application consists of three different surveys that are rendered individually.
Each survey is rendered using the RenderSurvey component that then proceeds to call other components vital to the rendering of the survey.

## `InteractiveForm` Component

The `InteractiveForm` component is a critical part of our React application, responsible for rendering a survey form, handling form submissions, persisting form data, and displaying recommendations. In this documentation, we'll explore the key aspects and functionality of the `InteractiveForm` component.

The `InteractiveForm` component serves as the main user interface for interacting with surveys. It consists of the following key features:

1. Displaying a survey using the `RenderSurvey` component.
2. Handling form submissions, saving data, and scrolling to the results section.
3. Persisting form values in local storage to prevent data loss on page reload.
4. Displaying helpful recommendations in the `Recommendations` component.

### Props

The `InteractiveForm` component does not receive any props directly from its parent component. Instead, it relies on custom hooks and context providers to manage its functionality.

### Internal Logic

`useSurvey()`

- This hook fetches the survey data that the form will render.

`usePersistForm()`

- This hook manages the persistence of form data in local storage.

`useSaveEntryMutation(surveyId)`

- This hook handles the submission of form data and saves it to the server.

### Usage

View example usage [in the router](../src/client/Router.tsx#L30)

### Notes

Make sure to configure the necessary context providers and custom hooks for this component to work correctly.

=================================================================

## `RenderSurvey` Component

The `RenderSurvey` component plays a crucial role in rendering survey questions and related selections. It is responsible for dynamically rendering survey-specific content, including faculty selection, survey selection, name input, and more. In this documentation, we will explore the key aspects and functionality of the `RenderSurvey` component.

The `RenderSurvey` component serves as the interface for rendering survey-related content and questions. It consists of the following core features:

1. Displaying survey-specific selections (e.g., faculty, survey, name input).
2. Rendering survey questions dynamically using the `RenderQuestions` component.
3. Providing a submit button or back-to-survey button based on the view mode.

### Props

The `RenderSurvey` component accepts the following props:

- `questions` (array): An array of survey questions to be rendered.
- `control` (object): The `react-hook-form` control object for managing form inputs.
- `watch` (function): A function provided by `react-hook-form` to watch form input changes.
- `isSubmitted` (boolean): A flag indicating whether the form has been submitted.

### Internal Logic

- The `RenderSurvey` component receives an array of `questions`, `control` for `react-hook-form`, `watch` function for form input changes, and `isSubmitted` to determine if the form has been submitted.
- It initializes the `showQuestions` state to `true` if `resultData` is available, which is used to control whether to display questions.
- It maps through the `questions` array and renders each question using the `RenderQuestions` component if `showQuestions` is `true`.
- It renders the form with questions and the submit button if `showQuestions` is `true`.
- If `showQuestions` is `false`, it displays a button to open the form.
- When the form is submitted, the data is sent to the server using the `mutation.mutateAsync` function.
- On successful submission, the `sessionStorage` is updated to `'results'`, and `showResults` is set to `true`, scrolling to the result section.
- If submission fails, an error message is displayed using `enqueueSnackbar`.

### Usage

View example usage [in the InteractiveForm](../src/client/components/InteractiveForm/InteractiveForm.tsx#L88) component's code.

### Notes

- The `RenderSurvey` component is used to render survey questions and handle form submissions.
- It conditionally displays questions based on the `showQuestions` state.
- Data persistence is handled through `usePersistForm` and `sessionStorage`.
- Form submissions trigger a call to the server for saving data.
- Error handling is in place to display submission errors to the user.

=================================================================

## `RenderQuestions` Component

The `RenderQuestions` component is a React component responsible for rendering individual survey questions within the survey form. This component dynamically renders different types of question choices and handles the display of child questions based on the parent-child relationship between questions.

### Props

The `RenderQuestions` component accepts the following props:

- `control` (object): The `control` object provided by the `react-hook-form` library, used for managing form control and validation.

- `watch` (function): A function provided by the `react-hook-form` library to watch the values of form inputs.

- `question` (Question object): An individual question object to be rendered. It contains all relevant details about the question, including its title, text, options, and visibility.

- `questions` (array of Question objects): An array of all question objects within the survey. This is used to manage parent-child relationships and visibility conditions.

- `language` (string): The current language used for localization.

### Internal Logic

The `RenderQuestions` component starts by checking the visibility conditions specified in the `question` object. If visibility conditions are met, it dynamically selects the appropriate component for rendering the question's choices (e.g., `SingleChoice`, `MultiChoice`, or `info`). It then renders the question text and the selected choice component.

If the current question has child questions, it recursively maps through these child questions and renders them using the same `RenderQuestions` component, effectively handling nested questions.

### Usage

View example usage [in the RenderSurvey](../src/client/components/InteractiveForm/RenderSurvey.tsx#L39) component's code.

### Notes

- `RenderQuestions` plays a crucial role in rendering and managing individual survey questions.
- It supports various question types and handles the dynamic display of child questions.
- This component ensures a smooth user experience by adapting to different question structures and interactions.

=================================================================

## `SingleChoice` Component

The `SingleChoice` component is a React component used to render a single-choice question with radio button options. This component is designed to be integrated into a larger form to provide users with the ability to select one option from the available choices.

### Props

The `SingleChoice` component accepts the following props:

- `control` (object): The `control` object provided by the `react-hook-form` library, which is used to manage form control and validation.

- `question` (Question object): The question object containing information about the question, including its options.

- `children` (ReactNode): Optional child elements that can be included within the `SingleChoice` component.

- `language` (string): The current language used for localization.

### Internal Logic

The `SingleChoice` component utilizes the `Controller` component from `react-hook-form` to manage the state of the radio button options. It maps over the options provided in the `question` object and renders radio button choices using Material-UI's `Radio` and `FormControlLabel` components. The `RadioGroup` component is used to group the radio buttons together.

=================================================================

## `MultiChoice` Component

The `MultiChoice` component is a React component used to render a multiple-choice question with checkbox options. This component is intended to be integrated into a larger form to allow users to select multiple options from the available choices.

### Props

The `MultiChoice` component accepts the following props:

- `control` (object): The `control` object provided by the `react-hook-form` library, which is used to manage form control and validation.

- `question` (Question object): The question object containing information about the question, including its options.

- `children` (ReactNode): Optional child elements that can be included within the `MultiChoice` component.

- `language` (string): The current language used for localization.

### Internal Logic

The `MultiChoice` component maps over the options provided in the `question` object and renders checkbox choices using Material-UI's `Checkbox` and `FormControlLabel` components. It utilizes the `Controller` component from `react-hook-form` to manage the state of the checkbox options within the form.

Additionally, the component supports rendering additional data using the `ShowMore` component, providing users with extra information about each choice when available.

=================================================================

## `Recommendations` Component

The `Recommendations` component is responsible for rendering recommendations on the side of the survey. It fetches and displays a list of recommended tools or information related to the survey.

### Props

- None

### Internal Logic

- The `Recommendations` component uses the `useTranslation` hook from `react-i18next` for internationalization and localization.
- It fetches survey-specific recommendations using the `useRecommendations` hook and displays them on the page.
- The component renders a title and utilizes the `ShowMore` component to display additional information.
- Recommendations are passed to the `Tools` component for rendering.

### Notes

- The `Recommendations` component provides users with useful information or tools related to the survey.
- It enhances the user experience by offering additional resources or guidance.
- This component plays a valuable role in providing context and assistance to users during the survey.
