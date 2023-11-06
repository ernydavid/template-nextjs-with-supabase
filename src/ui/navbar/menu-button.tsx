export default function MenuButton () {
  return (
    <button
      title='Menu toggle'
      type='button'
      className='group items-center justify-center w-7 h-7 rounded-small tap-highlight-transparent md:hidden flex ml-4'
    >
      <span className='w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit before:content-[""] before:block group-hover:opacity-80 before:h-px before:w-7 before:bg-foreground before:rounded-full before:-translate-y-1 group-data-[open="true"]:before:translate-y-px group-data-[open="true"]:before:rotate-45 before:transition-transform before:duration-150 after:content-[""] after:block after:h-px  after:w-7 after:bg-foreground after:rounded-full after:translate-y-1 group-data-[open="true"]:after:translate-y-0 group-data-[open="true"]:after:-rotate-45 after:transition-transform after:duration-150' />
    </button>
  )
}
