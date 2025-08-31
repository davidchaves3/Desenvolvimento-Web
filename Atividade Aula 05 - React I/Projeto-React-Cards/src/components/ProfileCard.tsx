interface ProfileCardProps {
  key:number;
  curso:string;
  hobbie:string;
  idade:number;
  imageUrl: string;
  name: string;
  title: string;
  linkGitHub: string;
}

function ProfileCard ({curso, hobbie, idade, name, title, imageUrl, linkGitHub} : ProfileCardProps){
  return (
    <div className="card">
      <img src={imageUrl} alt={'Foto de ${name}'} className="card-img" />
      <h2>{name}</h2>
      <p>
       <strong>Curso:</strong> {curso} <br/>
       <strong>Idade:</strong>  {idade} Anos<br/>
       <strong>Hobbies:</strong> {hobbie}<br/>
        {title}
      </p>
      <a href={linkGitHub}>GitHub</a>
    </div>
  );
}

export default ProfileCard;