# Results documentation

## `Results` Component

The `Results` component is designed to handle the presentation of user responses collected from an InteractiveForm. It receives data from the `ResultDataContext` provider, which holds the form values persisted in session storage. The Results component employs various sub-components to handle different aspects of result rendering, emailing, navigation, and contact information presentation.

The Results component is structured as follows:

- It imports required libraries, custom hooks, and sub-components.
- It retrieves survey and result data using `useSurvey` and `useResultData` hooks.
- It filters out empty or undefined values from the result data.
- It handles navigation back to the form section.
- It renders the result title, result elements, email sending functionality, and navigation buttons.
- It presents available contact methods to users.

## Props

The Results component accepts the following props:

- `setShowResults` (function): A function to control the display of the Results component.

### Internal Logic

**Data Retrieval**

The Results component utilizes custom hooks such as `useSurvey` and `useResultData` to fetch the necessary data. It checks if the `survey` and `resultData` are available; if not, it returns `null` to prevent rendering without data.

**Result Data Processing**

The component processes the result data to ensure meaningful presentation. It filters out empty or undefined values from the result data.

**Navigation**

The `onNavigateBack` function handles navigation back to the form section when the "Back" button is clicked. It also provides a smooth scroll behavior to the form section.

**Rendering**

The component renders the following elements:

- The result title.
- The result elements using the `RenderResults` sub-component.
- An option to send a summary email using the `SendSummaryEmail` sub-component.
- Navigation buttons (`SurveyButtons`) for going back to the form section.
- Contact methods presented by the `ProceedToContact` sub-component.

### Notes

- Ensure that the required dependencies, as mentioned in the Dependencies section, are installed in your project before using the Results component.
- Custom sub-components (`RenderResults`, `SendSummaryEmail`, `SurveyButtons`, `ProceedToContact`) are crucial for the component's functionality.
- The `ResultDataContext` provider is used to obtain result data, which is essentially the persisted form values from the InteractiveForm stored in session storage.
- Developers can refer to the Key Functions section for more details on the specific functions and behaviors of the Results component.

=================================================================

## `RenderResults` Component

The RenderResults component is a crucial part of the InteractiveForms application responsible for fetching and rendering result data obtained from an API. This documentation provides insights into its purpose, usage, and internal logic.

The RenderResults component fetches result data from an API using the `useResults` React Query function. It is designed to dynamically render result elements based on the selected dimensions. Each dimension corresponds to a specific set of result elements. This documentation outlines the key aspects of the RenderResults component.

### Props

The RenderResults component accepts the following props:

- `resultArray` (array of arrays): Represents the result data fetched from the API, organized as an array of arrays.
- `dimensionSelections` (array of objects): An array of dimension objects that define which dimensions' result elements should be rendered.

### Internal Logic

**Data Fetching**

- Utilizes the `useResults` hook to fetch result data from the API. The `survey?.id` is used as a parameter to identify the specific survey results to fetch.

**Rendering Result Elements**

- Maps through the `resultArray`, which contains arrays of result labels.
- For each result label, it maps through the available dimensions to render dimension-specific result elements using the `ResultElement` component.

**Conditional Rendering**

- Ensures that the necessary data, including `survey`, fetched `results`, and `dimensionSelections`, are available before rendering. If any of these are missing, it returns `null`.

### Notes

- Ensure that the required dependencies, including `useResults`, are correctly set up in your project to fetch result data from the API.
- The `dimensionSelections` prop allows you to specify which dimensions' result elements should be rendered. Make sure to provide this prop appropriately.
- Conditional rendering is used to prevent rendering when essential data is missing, ensuring a seamless user experience.
- Language handling is implemented to ensure that the RenderResults component can adapt to different language settings.

=================================================================

## `ResultElement` Component

The `ResultElement` component is a fundamental part of the InteractiveForms application, responsible for rendering a single result element along with dimension-specific details. This documentation provides insights into its purpose, usage, and internal logic.

### Props

The `ResultElement` component accepts the following props:

- `language` (key of Locales): Represents the language for which the result should be displayed.
- `resultData` (Result | undefined): Contains the result data for the selected option of the survey's questions.
- `dimensionSelections` (Dimension[]): An array of selected dimensions, if supported by the application.

### Internal Logic

The `ResultElement` component is responsible for rendering a single result element. It takes the following props:

- `language` (key of Locales): Represents the language for which the result should be displayed.
- `resultData` (Result | undefined): Contains the result data for the selected option of the survey's questions.
- `dimensionSelections` (Dimension[]): An array of selected dimensions, if supported by the application.

**Rendering the Main Result**

- The component renders the main result title using the `Markdown` component.
- The title is derived from `resultData.isSelected[language]`.

**Rendering Dimension-Specific Results**

- The component iterates through the `dimensionSelections` array to render dimension-specific results.
- Each dimension-specific result is enclosed in a colored border, with the color determined by the dimension's `color` property.
- If a dimension-specific result is not available in the `resultData`, it is skipped.
- The text content of each dimension-specific result is rendered using the `Markdown` component.

### Notes

- Ensure that the required dependencies, including `Markdown` and any custom types (e.g., `Locales`, `Result`, `Dimension`), are correctly imported and available in your project.
- The `ResultElement` component is designed to render a single result element along with dimension-specific information, which can be useful for providing context and details about the result.
- The component gracefully handles cases where the required `resultData` and `dimensionSelections` props are missing, preventing rendering errors.
- The use of Markdown for rendering text content allows for flexible and formatted result presentation.
