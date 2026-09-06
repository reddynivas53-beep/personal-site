import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');

    expect(heroSection).toBeInTheDocument();
  });

  it('displays my name as the main heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('M NIVAS REDDY');
  });

  it('displays my professional introduction', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.hero-tagline')).toHaveTextContent(
      'I am M Nivas Reddy, a Senior Web Developer specializing in HTML, CSS, and JavaScript. I build responsive, user-friendly websites with a strong focus on clean design, functionality, and modern web experiences.'
    );
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
    expect(screen.queryByText('YC Alum')).not.toBeInTheDocument();
    expect(screen.queryByText('Stanford ICME')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one resume link', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', {
      name: /about me/i,
    });

    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', {
      name: /view resume/i,
    });

    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');

    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});