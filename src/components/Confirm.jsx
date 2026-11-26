/**
 * Visible marker for statements that could not be verified from the app or
 * backend source. Resolve every one before publishing the page:
 *   grep -rn "<Confirm" src/
 */
export default function Confirm({ children }) {
  return (
    <span className="confirm" role="note">
      <span className="confirm__tag">Requires confirmation</span>
      {children && <span className="confirm__text">{children}</span>}
    </span>
  );
}
