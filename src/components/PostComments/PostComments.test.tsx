import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Post from '.';
import PostComment from '.';
import PostComments from './index';


describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });
});


describe('PostComments Component', () => {
  test('deve inserir dois comentários usando data-testid', () => {
    render(<PostComments />);

    // Encontrar o input e botão pelo data-testid
    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-comment');

    // Inserir o primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    // Inserir o segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    // Verificar se os dois comentários agora aparecem na tela
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});
