import styled from 'styled-components';

export const ChatWrapper = styled.div`
    * {
        margin-bottom: 10px;
    }
    vertical-align: initial;
    overflow-wrap: break-word;

    code {
        font-family: monospace !important;
        background-color: #202b40;
        padding: 6px 8px;
        border-radius: 5px;
        min-width: 700px;
        word-wrap: break-word;
        box-decoration-break: clone;
    }

    h1 {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }
    h2 {
        font-size: 1.5rem;
        line-height: 2rem;
    }
    h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`;
