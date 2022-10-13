/*chny large.css*/
/*large.css*/
/* 64em is also 1028px when basefont is 16px */
@media only screen and (min-width: 64rem) {
    
    nav ul li a {
        padding: .5rem 1rem;
    }
  
  }
  /*end large.css*/
  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px
  */
  
  @media (min-width: 1028px) {
  
    nav ul {
        flex-direction: row;
        justify-content: center;
    }
    
    nav li {
        margin-right: 1rem;
        display: flex;
    }
    
    nav li:first-child {
        display: none;
    }
  
    nav li:last-child {
        margin-right: 0;
    }
  
    header img {
      width: 100%;
    }
  
    .headings h1 {
      font-size: 3rem;
    } 
  
  }
  /* end large */
  /* Larger viewports */
  @media only screen and (min-width: 32.5em) {
      header img {
          width: 100%;
      }
  
      .headings h1 {
          font-size: 2rem;
          margin: 0;
      }
  
      .m {
          letter-spacing: 1.5pt;
          font-size: 0.9rem;
      }
  }
S  