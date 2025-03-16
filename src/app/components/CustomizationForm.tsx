xml
<project>
  <name>AI Article Summarizer</name>
  <framework>next-on-pages</framework>
  <overview>
    This application summarizes articles using the  OpenAI API.  Users can input an article URL, and the application extracts the text content, sends it to OpenAI for summarization, and displays the result. The application also allows customization of the summarization process, such as specifying the desired length and tone of the summary.
  </overview>
</project>

<page>
  <path>src/app/page.tsx</path>
  <description>
    "use client";
    This is the main page of the application. It contains:
      - An input field for the article URL.
      - A "Summarize" button.
      - A section to display the summarized article.
      - A CustomizationForm component to allow users to adjust summarization parameters.

    The page uses useState to manage:
      - The article URL input.
      - The generated summary.
      - A loading state.

    It includes a mock API call to simulate fetching the article text and sending it to OpenAI for summarization. The summarization parameters from the CustomizationForm component are also passed to this mock API call.

    Framer Motion is used to fade in the summary section after it is generated.
  </description>
</page>

<component>
  <path>src/app/components/CustomizationForm.tsx</path>
  <description>
    "use client";
    This component provides options to customize the summarization process.

    - Functionality:
        - Allows users to specify the desired length of the summary (short, medium, long).
        - Allows users to select the tone of the summary (formal, informal, neutral).
    - Prop Interface:
      - `onCustomize`: A function that takes the length and tone as arguments and is called when the user submits the form.

    - State Management:
        - useState to manage the selected length and tone.

    - Style: Tailwind CSS for styling the form and its elements.

    - Edge Compatibility: Uses client-side functionality ("use client").
  </description>
</component>