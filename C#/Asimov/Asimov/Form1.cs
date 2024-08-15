using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace Asimov
{
    public partial class collegeAsimov : Form
    {
        private readonly HttpClient _client;

        public collegeAsimov()
        {
            InitializeComponent();

            // Initialisation de HttpClient avec l'adresse de ton API
            _client = new HttpClient();
            _client.BaseAddress = new Uri("http://localhost:5000/"); // URL de ton API
        }

        private async void validerForm_Click(object sender, EventArgs e)
        {
            // Récupérer les données du formulaire
            string nomEntreprise = nomEntrepriseTextBox.Text;
            string contactEntreprise = contactEntrepriseTextBox.Text;
            int nbLettreEnvoye = Convert.ToInt32(nbLettreEnvoyeTextBox.Text);
            int nbLettreRecu = Convert.ToInt32(nbLettreRecuTextBox.Text);
            string dateEntretien = dateEntretienTextBox.Text;
            string resultat = resultatTextBox.Text;
            int idUtilisateur = Convert.ToInt32(idUtilisateurTextBox.Text);

            // Créer un objet JSON avec les données à envoyer
            var data = new
            {
                nomEntreprise = nomEntreprise,
                contactEntreprise = contactEntreprise,
                nbLettreEnvoye = nbLettreEnvoye,
                nbLettreRecu = nbLettreRecu,
                dateEntretien = dateEntretien,
                resultat = resultat,
                id_utilisateur = idUtilisateur
            };

            try
            {
                // Convertir l'objet en JSON
                string jsonData = JsonConvert.SerializeObject(data);

                // Créer une instance HttpClient
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri("http://localhost:5000/"); // Modifier avec l'URL de ton API

                    // Ajouter les headers et le contenu JSON
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    var content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                    // Envoyer la requête POST à l'API
                    HttpResponseMessage response = await client.PostAsync("api/stage", content);

                    // Vérifier la réponse de l'API
                    if (response.IsSuccessStatusCode)
                    {
                        MessageBox.Show("Données envoyées avec succès !");
                    }
                    else
                    {
                        MessageBox.Show("Erreur lors de l'envoi des données à l'API : " + response.ReasonPhrase);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erreur : " + ex.Message);
            }
        }
    }
}
