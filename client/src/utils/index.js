import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constant';

// To get Random Prompt if the User has no idea for the input search.
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export async function openEaimbox(){
  window.open(`mailto:abc@gmail.com?subject=Subject&body=Body%20goes%20here`)
}
