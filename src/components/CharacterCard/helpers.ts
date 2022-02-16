export default function toggleIsExcelsior(
  isExcelsior: boolean,
  character: Character,
): void {
  let excelsiorTeam = JSON.parse(localStorage.getItem('EXCELSIOR_TEAM'));

  if (isExcelsior) {
    excelsiorTeam = excelsiorTeam.filter((char) => char.id !== character.id);
  } else if (excelsiorTeam === null) {
    excelsiorTeam = [{ ...character, isExcelsior: true }];
  } else {
    excelsiorTeam = excelsiorTeam.concat({ ...character, isExcelsior: true });
  }

  localStorage.setItem('EXCELSIOR_TEAM', JSON.stringify(excelsiorTeam));
}
