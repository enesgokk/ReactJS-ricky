import { render, screen } from '@testing-library/react';
import App from '../App';
import EpisodeDetailComponent from '../components/Detail/EpisodeDetailComponent';

test('renders creation should be document', () => {
  render(<App />);
  const linkElement = screen.getByTestId("creation");
  expect(linkElement).toBeInTheDocument();
});

test('renders row should be 1', () => {
  render(<App />);
  const listElement = screen.getAllByRole("row");
  expect(listElement).toHaveLength(1);
});

test('renders Search input should be empty', () => {
  render(<EpisodeDetailComponent/> );
  const inputElement = screen.getByPlaceholderText(/search characters.../i);
  expect(inputElement.value).toBe("");
});

test('loading should be render each time when data is not exist yet', () => {
  render(<EpisodeDetailComponent/> );
  const loadingElement = screen.getByTestId("loading");
  expect(loadingElement).toHaveTextContent("Loading...");
});



