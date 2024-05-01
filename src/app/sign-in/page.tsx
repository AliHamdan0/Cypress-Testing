"use client";
export default function Page() {
  function submitHandler(e: any) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="email" placeholder="enter your email" />
        <input type="password" placeholder="Your Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
