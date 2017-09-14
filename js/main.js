$( document ).ready(function() {
    
     var male = [

          {
            nome: 'João',
            gender: 'Male',
            phone: '911940499',
            birthday: '20/06/1997'
          },
          {
            nome: 'Rodrigo',
            gender: 'Male',
            phone: '919839182',
            birthday: '08/01/1999'
          },
          {
            nome: 'Zé',
            gender: 'Male',
            phone: '932340569',
            birthday: '12/03/1997'
          },
          {
            nome: 'Tiago',
            gender: 'Male',
            phone: '919849810',
            birthday: '08/09/1995'
          },
          {
            nome: 'Alfredo',
            gender: 'Male',
            phone: '930341661',
            birthday: '02/11/1997'
          },
          {
            nome: 'Mario',
            gender: 'Male',
            phone: '91932645',
            birthday: '16/11/2000'
          },
          {
            nome: 'Bernardo',
            gender: 'Male',
            phone: '919134182',
            birthday: '10/11/1970'
          },
          {
            nome: 'Diogo',
            gender: 'Male',
            phone: '912944569',
            birthday: '22/08/1993'
          },
          {
            nome: 'Ricardo',
            gender: 'Male',
            phone: '911819315',
            birthday: '10/12/1999'
          },
          {
            nome: 'Daniel',
            gender: 'Male',
            phone: '930121555',
            birthday: '02/04/1997'
          },
     ];

     var female = [

          {
            nome: 'Maria',
            gender: 'female',
            phone: '929391920',
            birthday: '03/06/1995'
          },
          {
            nome: 'Antonieta',
            gender: 'female',
            phone: '91930669',
            birthday: '29/12/1997'
          },
          {
            nome: 'Francisca',
            gender: 'female',
            phone: '912020304',
            birthday: '01/03/1997'
          },
           {
            nome: 'Matilde',
            gender: 'female',
            phone: '919491650',
            birthday: '03/12/1995'
          },
          {
            nome: 'Ana',
            gender: 'female',
            phone: '91960166',
            birthday: '09/12/1997'
          },
          {
            nome: 'Andreia',
            gender: 'female',
            phone: '913921304',
            birthday: '01/12/1987'
          },
           {
            nome: 'Catarina',
            gender: 'female',
            phone: '919454613',
            birthday: '17/05/2001'
          },
          {
            nome: 'Daniela',
            gender: 'female',
            phone: '919453369',
            birthday: '12/08/1990'
          },
          {
            nome: 'Filipa',
            gender: 'female',
            phone: '912099304',
            birthday: '08/05/1992'
          },
           {
            nome: 'Rita',
            gender: 'female',
            phone: '913455655',
            birthday: '23/03/1988'
          }
     ]

     var dados = male.concat(female);

     var gender = 'all';

      $(document).on('keyup', function(e){
    if ( e.keyCode == 32 ) {
        
        randomNames();


        $('.text-info').removeClass('text-off');
    }

});


      $('.header_button--male').on('click', function(){

        gender = 'Male';

      });

      $('.header_button--female').on('click', function(){

        gender = 'Female';

      });

      $('.header_button--random').on('click', function(){

        gender = 'all';

      });

      
      function randomNames(){

       

        var id = Math.floor(Math.random() * (dados.length - 0)) + 0;
        
        $('.texto').html(dados[id].nome);
        $('.gender').html(dados[id].gender);
        $('.phone').html(dados[id].phone);
        $('.birthday').html(dados[id].birthday);

        if (gender === 'Male'){

          dados = male;
        }

        else if (gender === 'Female') {

          dados = female;

        }  

        else {

          dados = male.concat(female);

        }

        return dados;

       
      }   
});
      
