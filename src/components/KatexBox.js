import { InlineMath, BlockMath } from 'react-katex';



export function Inline({ math }) {
  return <InlineMath math={String(math)} />;
}

export function Block({ math }) {
  return <BlockMath math={String(math)} />;
}
