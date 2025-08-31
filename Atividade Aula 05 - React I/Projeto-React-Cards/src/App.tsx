import './App.css'
import ProfileCard  from './components/ProfileCard' ;

function App(){
  const profilesData = [
    {
        id: 1,
        imageUrl:'https://avatars.githubusercontent.com/u/109917681?v=4',
        idade:22,
        curso:'Engenharia de Software',
        hobbie:': Tecnologia, Impressão 3D e projetos maker',
        name: 'David Chaves',
        title:'King of darkness',
        linkGitHub:'https://github.com/davidchaves3'
    },
    {
        id: 2,
        imageUrl:'https://avatars.githubusercontent.com/u/159586908?v=4',
        idade:21,
        curso:'Engenharia de Software',
        hobbie:': Amar demais',
        name: 'Lucas Nascimento',
        title:'LUSAK',
        linkGitHub:'https://github.com/lukasnascky'
    }
  ];
  return (
    <div className='App'>
      <h1>Equipe Projeto EcoNet</h1>
      <div className="profiles-container" >
        {profilesData.map(profile =>(
          <ProfileCard
            key={profile.id} 
            name={profile.name}
            curso={profile.curso}
            hobbie={profile.hobbie}
            idade={profile.idade}
            title={profile.title}
            imageUrl={profile.imageUrl}
            linkGitHub={profile.linkGitHub}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



