const UserInfo = () => (
  <div className="user-info">
    <img src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/362901200_1001407104618920_4377549344917844862_n.jpg?stp=c42.7.855.855a_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_iunyxbE74sQ7kNvgEande-&_nc_oc=AdjCTBovuDhQssqPXW9H8r1owLOB_yoTCBvXj-_zUSVvcTj94WOOf33XLT05Kgzd048&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AYNHvvle7_aTnAIPTnR_iNT&oh=00_AYDbW_qg6F376H3oWQKk66-mOZjysWvunpYA2f7yc9Iymg&oe=67C54CC7" alt="Tofayel Ahmed" />
    <div className="naem-bar" style={{display: 'flex', alignItems: 'center'}}>
        <h2 style={{marginRight: '10px'}}>
            <a href="https://www.facebook.com/TofayelAhmedRafi" target="_blank" rel="noopener noreferrer">
             Tofayel Ahmed
            </a>
        </h2>
        <h3 style={{marginRight: '10px'}}>Folwers <u>21k</u></h3>
        <h3>Folwing <u>1k</u></h3>
    </div>
    <h3>full stack web developer</h3>
    <h3>From Bogura, Bangladesh</h3>
    <h3>Phone : 01721-181419</h3>
    <h3>groext@gmail.com</h3>
    <h3>05/12/1999</h3>
    <h3>Skills: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</h3>
    
    <p>Tofayel Ahmed is an experienced SEO expert specializing in on-page, off-page, and technical SEO. With a proven track record of improving search rankings and driving organic traffic, Tofayel helps businesses boost their online visibility and achieve sustainable growth in the digital space.</p>
  </div>

/* <div className="user-info">
    <img src={user.avatar_url} alt={user.name} />
    <h2>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        {user.name}
        </a>
    </h2>
    <h3>{user.login}</h3>
    <h3>{user.company}</h3>
    <h3>{user.location}</h3>
    <h3>{user.email}</h3>
    <h3>{user.dob}</h3>
    <h3>{user.followers}</h3>
    <h3>{user.following}</h3>
    <h3>{user.skills}</h3>
    <p>{user.bio}</p>
  </div> */
);
export default UserInfo;