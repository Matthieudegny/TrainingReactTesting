import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { OptionsProvider } from '../context/optionsContext';
import ScoreAndResults from './ScoreAndResults';
import ChooseAndPlay from './ChooseAndPlay';
import { generateComputerHand } from '../utils/randomNumber';

vi.mock('../utils/randomNumber', () => ({
  generateComputerHand: () => 0,
}));

describe('ScoreAndResults', () => {
  it('should display 2 seconds on the screen after we wait 1 second second', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const hand = screen.getByText(/paper/i);
    expect(hand).toBeInTheDocument();

    fireEvent.click(hand);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    screen.debug();

    expect(screen.getByTestId('timer')).toHaveTextContent('2');
  });

  it('should display 2 seconds on the screen after we wait 1 second second', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const hand = screen.getByText(/paper/i);
    expect(hand).toBeInTheDocument();

    fireEvent.click(hand);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    screen.debug();

    expect(screen.getByTestId('timer')).toHaveTextContent('1');
  });

  it('should display the Player winner message on the page', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const hand = screen.getByText(/paper/i);
    expect(hand).toBeInTheDocument();

    fireEvent.click(hand);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.getByText(/Player wins!/i)).toBeInTheDocument();
    expect(screen.getByText(/Player1 wins - Paper beats Rock/i)).toBeInTheDocument();

    expect(screen.getByText(/Player: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 0/i)).toBeInTheDocument();

    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/paper/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/rock/i)).toHaveLength(2);
  });

  it('should display the Computer winner message on the page', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const hand = screen.getByText(/scissors/i);
    expect(hand).toBeInTheDocument();

    fireEvent.click(hand);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.getAllByText(/Computer wins!/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Computer Wins! - Rock beats scissors!/i)).toBeInTheDocument();

    expect(screen.getByText(/Player: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 1/i)).toBeInTheDocument();

    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/scissors/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/rock/i)).toHaveLength(2);
  });

  it('should display the Draw message on the page', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const hand = screen.getByText(/rock/i);
    expect(hand).toBeInTheDocument();

    fireEvent.click(hand);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.getByText(/No one/i)).toBeInTheDocument();
    expect(screen.getByText(/We have a draw/i)).toBeInTheDocument();

    expect(screen.getByText(/Player: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 0/i)).toBeInTheDocument();

    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/rock/i)).toHaveLength(3);
  });
});
