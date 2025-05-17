/* eslint-disable prettier/prettier */
// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import HeadshotImg from "../../headshot/pic.jpg";
import Bubble from "../../headshot/bubble.png"

// Help
export const help = async (args: string[]): Promise<string> => {
  // Command descriptions
  const descriptions: { [key: string]: string } = {
    help: 'Show this help message',
    repo: 'Open the Github repository',
    about: 'About me',
    resume: 'Open my latest resume',
    donate: 'Show ways to support my work',
    email: 'Contact me via email',
    github: 'Open my Github profile',
    linkedin: 'Open my LinkedIn profile',
    google: 'Search Google',
    duckduckgo: 'Search DuckDuckGo',
    bing: 'Search Bing',
    reddit: 'Search Reddit',
    echo: 'Echo the input text',
    whoami: 'Show the terminal username',
    ls: 'List fake directories',
    cd: 'Change directory (not really)',
    date: 'Show the current date and time',
    vi: 'Joke about vi',
    vim: 'Joke about vim',
    nvim: 'Joke about nvim',
    emacs: 'Joke about emacs',
    sudo: 'Joke about sudo',
    cp: 'Show all my coding profiles',
    banner: 'Show the welcome banner',
    projects: 'List my GitHub projects (Soon Changing them to live projects)',
    quote: 'Show a random quote',
    readme: 'Display my GitHub README',
    weather: 'Show the weather for a city',
    sumfetch: 'Display a summary card',
    clear: 'Clear the terminal',
  };
  const commands = Object.keys(bin).sort();
  let c = '';
  for (const cmd of commands) {
    c += `<b>${cmd}</b> => ${descriptions[cmd] || 'No description'}<br/>`;
  }
  return `Welcome! Here are all the available commands:<br><br>${c}<br>[tab]: trigger completion.<br>[ctrl+l]/clear: clear terminal.<br>Type 'sumfetch' to display summary.`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my portfolio website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.upi}" target="_blank">UPI 🇮🇳 (Click for QR or UPIid: 9007110304@superyes)</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const cp = async (args: string[]): Promise<string> => {
  return `Here are my coding profiles:<br>
  Basically it is my playground to train brain muscles 🏋🏽💪🏼🧠:<br>
  <div style="display: flex; align-items: center; margin-bottom: 6px;">
  <img src="assets/cp/lc.png" style="width: 24px; margin-right: 8px;" />
  <u><a class="text-light-blue dark:text-dark-blue underline" href="${config["coding-profiles"].lc}" target="_blank">LeetCode</a></u>
</div>

<div style="display: flex; align-items: center; margin-bottom: 6px;">
  <img src="assets/cp/cf.png" style="width: 24px; margin-right: 8px;" />
  <u><a class="text-light-blue dark:text-dark-blue underline" href="${config["coding-profiles"].cf}" target="_blank">Codeforces</a></u>
</div>

<div style="display: flex; align-items: center; margin-bottom: 6px;">
  <img src="assets/cp/cc.png" style="width: 24px; margin-right: 8px;" />
  <u><a class="text-light-blue dark:text-dark-blue underline" href="${config["coding-profiles"].cc}" target="_blank">CodeChef</a></u>
</div>

<div style="display: flex; align-items: center; margin-bottom: 6px;">
  <img src="assets/cp/ac.png" style="width: 24px; margin-right: 8px;" />
  <u><a class="text-light-blue dark:text-dark-blue underline" href="${config["coding-profiles"].ac}" target="_blank">AtCoder</a></u>
</div>

<div style="display: flex; align-items: center; margin-bottom: 6px;">
  <img src="assets/cp/gfg.png" style="width: 24px; margin-right: 8px;" />
  <u><a class="text-light-blue dark:text-dark-blue underline" href="${config["coding-profiles"].gfg}" target="_blank">GeeksforGeeks</a></u>
</div>

<div style="display: flex; align-items: center; margin-bottom: 6px;">
  <img src="assets/cp/cs.png" style="width: 24px; margin-right: 8px;" />
  <u><a class="text-light-blue dark:text-dark-blue underline" href="${config["coding-profiles"].cs}" target="_blank">Coding Ninjas (CodeStudio)</a></u>
</div>

  `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
<div style='display:inline-flex;align-items:center;'>
<img style="margin-right:2em;" src=${HeadshotImg.src} width="180px"/>
<pre style="font-size: 1.15em; line-height: 1.15;">
<img style="position:absolute; right: 0; top: 0;" src=${Bubble.src} width="220px"/>
███████╗ █████╗ ███╗   ██╗██████╗ ██╗██████╗  █████╗ ███╗   ██╗                            
██╔════╝██╔══██╗████╗  ██║██╔══██╗██║██╔══██╗██╔══██╗████╗  ██║                            
███████╗███████║██╔██╗ ██║██║  ██║██║██████╔╝███████║██╔██╗ ██║                            
╚════██║██╔══██║██║╚██╗██║██║  ██║██║██╔═══╝ ██╔══██║██║╚██╗██║                            
███████║██║  ██║██║ ╚████║██████╔╝██║██║     ██║  ██║██║ ╚████║                            
╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝                            
                                                                                           
 ██████╗██╗  ██╗ █████╗ ██╗  ██╗██████╗  █████╗ ██████╗  ██████╗ ██████╗ ████████╗██╗   ██╗ 
██╔════╝██║  ██║██╔══██╗██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝╚██╗ ██╔╝
██║     ███████║███████║█████╔╝ ██████╔╝███████║██████╔╝██║   ██║██████╔╝   ██║    ╚████╔╝ 
██║     ██╔══██║██╔══██║██╔═██╗ ██╔══██╗██╔══██║██╔══██╗██║   ██║██╔══██╗   ██║     ╚██╔╝  
╚██████╗██║  ██║██║  ██║██║  ██╗██║  ██║██║  ██║██████╔╝╚██████╔╝██║  ██║   ██║      ██║   
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝      ╚═╝   
</pre>
</div>
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
