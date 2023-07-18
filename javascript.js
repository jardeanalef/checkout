
        

        const menuDev = document.getElementById('menu-mobile')
        const btnAnimar = document.getElementById('btn-menu')

        if (menuDev) {
            menuDev.addEventListener('click', () => {
              alert('Sem pagina no momento');
            });
          }

        function animarMenu() {
            menuDev.classList.toggle('abrir')
            btnAnimar.classList.toggle('ativo')
        }

        document.getElementById('checkout-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtenha os valores dos campos
            var departureDate = document.getElementById('departure-date').value;
            var returnDate = document.getElementById('return-date').value;
            var adultCount = document.getElementById('adult-count').value;
            var childCount = document.getElementById('child-count').value;
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            
            // Valide os campos (opcional)
            if (departureDate === '' || returnDate === '' || adultCount === '' || childCount === '' || name === '' || email === '' || phone === '') {
              alert('Por favor, preencha todos os campos.');
              return;
            }
            
            // Faça algo com os dados do formulário, como enviar para o servidor ou exibir em uma mensagem
            alert('Dados enviados:\n\nData de ida: ' + departureDate + '\nData de volta: ' + returnDate + '\nPassageiros adultos: ' + adultCount + '\nPassageiros crianças: ' + childCount + '\nNome: ' + name + '\nE-mail: ' + email + '\nTelefone: ' + phone);
          });
          
         
          
          
          
          
          
          
          