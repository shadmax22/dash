export function Profile() {
  return (
    <>
      <div className="profile-module flex flex-col py-3 gap-2">
        <h1>Hello Anya,</h1>
        <b>BEC278944</b>

        <div className="flex justify-between mt-3 mb-3">
          <button>SETTINGS</button>
          <button>LOG OUT</button>
        </div>
      </div>
    </>
  );
}
