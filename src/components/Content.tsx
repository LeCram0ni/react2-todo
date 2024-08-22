export default function Content() {
    return (
        <div id="full">
            <div id="content">
                <h1>
                    Fun facts about React
                </h1>
                <ul>
                    <li><strong>Created by Facebook</strong>: developed by Facebook in 2011 and was open-sourced in 2013.</li>
                    <li><strong>Virtual DOM</strong>: Virtual DOM to speed up updates, making UI rendering more efficient.</li>
                    <li><strong>Component-Based</strong>: reusable components, promoting modularity and maintenance.</li>
                    <li><strong>One-Way Data Binding</strong>: Data flows from parent to child components only.</li>
                    <li><strong>React Native</strong>: Extends React concepts to build native apps for iOS and Android.</li>
                    <li><strong>Declarative Syntax</strong>: Describes UI based on current state for easier-to-debug code.</li>
                    <li><strong>JSX</strong>: Uses HTML-like syntax in JavaScript to simplify React elements.</li>
                    <li><strong>Hooks</strong>: state/feature management in functional components, avoiding class components.</li>
                    <li><strong>Popular Ecosystem</strong>: Includes many tools and libraries like Redux and React Router.</li>
                    <li><strong>Wide Adoption</strong>: Used by major companies and websites (Instagram, Netflix, Airbnb...)</li>
                </ul>
                <p id="text">
                    React is a JavaScript library for building user interfaces, developed by Facebook and open-sourced in 2013. It introduced several groundbreaking concepts that have since become staples in modern web development. One of React’s most notable features is its use of the Virtual DOM. This technique allows React to efficiently update and render UI components by comparing the current state of the Virtual DOM with a new version, minimizing the amount of direct manipulation to the real DOM and enhancing performance.

                    React’s component-based architecture is another key feature. By breaking down UIs into reusable components, developers can manage and maintain code more effectively. Each component encapsulates its logic, styles, and rendering, which helps in building complex UIs in a more manageable and modular way.

                    One-way data binding is another core principle of React. Data flows in a single direction from parent to child components, which simplifies the process of tracking and managing changes within the application. This unidirectional data flow ensures that the UI remains consistent with the underlying state.

                    React also introduced JSX, a syntax extension that allows developers to write HTML-like code within JavaScript. This combination of HTML and JavaScript enhances readability and makes it easier to understand how components are structured and how they interact with each other.

                    With the introduction of Hooks in React 16.8, developers gained a new way to handle state and lifecycle features in functional components, removing the need for class components in many cases. Hooks like useState and useEffect make it simpler to manage side effects and state in a more declarative manner.

                    React’s ecosystem is vast, with a rich set of libraries and tools that complement its core functionality. Redux, for instance, provides a robust solution for state management, while React Router enables navigation within single-page applications. The wide adoption of React by companies like Instagram, Netflix, and Airbnb underscores its effectiveness and popularity in the industry.

                    React also extends its principles to mobile app development through React Native. This framework allows developers to build cross-platform mobile applications using the same React principles, enabling code reuse across web and mobile platforms.

                    Overall, React’s innovative approach to UI development, combined with its powerful features and extensive ecosystem, has made it a favorite among developers and companies alike, driving its widespread use and continuous evolution in the tech landscape.
                </p>
            </div>
        </div>
    );
}
