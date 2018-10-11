<script> var vokabelListe = [
                 {de:"Lager", en:"camp"},
                 {de:"selten", en:"rare"},
                 {de:"Bürger", en:"citizen"},
                 {de:"Verbot", en:"ban"},
                 {de:"allergisch", en:"allergic"},
                 {de:"Stich", en:"sting"},
                 {de:"Fahrzeug", en:"vehicle"},
                 {de:"Schatten", en:"shadow"},
                 {de:"Hitze", en:"heat"},
                 {de:"Leiden", en:"suffer"},
                ];
            function initPage (start) {
    
                var fieldNr=1;
                var vokabelNr=0;
                while (fieldNr<11) {
    
                    fillMyFrage ("f"+fieldNr, vokabelListe[vokabelNr].de);
                    vokabelNr++;
                    fieldNr++;
    
                }

                resetAll();
                countDown(20,"timer");
            }
    
            
            function fillMyFrage (field,en) {
                var y=document.getElementById(field).value=en;
                document.getElementById(field).innerHTML = y;                    
            }
    
            function aufgabeCheckAll()
            {
                var aufgabeNr=1;
                var fieldName=0;
                while (aufgabeNr<11) {
                    aufgabeCheck(aufgabeNr,vokabelListe[fieldName].en);
                    fieldName++;
                    aufgabeNr++;
                }
            }

        function aufgabeCheck(aufgabeNr)
        {
            var fieldName="a" + aufgabeNr;
            var userInput = document.getElementById(fieldName).value;
            var vokabel = vokabelListe[aufgabeNr-1].en;
             if (userInput == vokabel) {

                document.getElementById(fieldName).style.backgroundColor = 'green';
            } 
            else {
                document.getElementById(fieldName).style.backgroundColor = 'red';
            }
        }

            function resetAll()
            {
                var aufgabeNr=1;
                var fieldName=0;
                while (aufgabeNr<11) {
                    aufgabeReset(aufgabeNr);
                    fieldName++;
                    aufgabeNr++;
                }
            }

        function aufgabeReset(aufgabeNr)
        {
            var fieldName="a" + aufgabeNr;
            var userInput = document.getElementById(fieldName).value;
            var vokabel = vokabelListe[aufgabeNr-1].en;
   
                document.getElementById(fieldName).style.backgroundColor = 'white';
            
        }


            function Neustart(){

                initPage();



            }



        function countDown(resttime, timerElementId){
            var timerElement=document.getElementById(timerElementId);
            timerElement.innerHTML="Du hast noch "+resttime+" Sekunden";
            if (resttime<1) {
                timerElement.innerHTML='Zeit abgelaufen';
                aufgabeCheckAll();
            } else {
                resttime--;
                setTimeout('countDown('+resttime+',"'+timerElementId+'")',1000);
            }
        }


        initPage();
        </script>