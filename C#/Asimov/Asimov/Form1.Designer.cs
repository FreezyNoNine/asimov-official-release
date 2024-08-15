namespace Asimov
{
    partial class collegeAsimov
    {
        /// <summary>
        /// Variable nécessaire au concepteur.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Nettoyage des ressources utilisées.
        /// </summary>
        /// <param name="disposing">true si les ressources managées doivent être supprimées ; sinon, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Code généré par le Concepteur Windows Form

        /// <summary>
        /// Méthode requise pour la prise en charge du concepteur - ne modifiez pas
        /// le contenu de cette méthode avec l'éditeur de code.
        /// </summary>
        private void InitializeComponent()
        {
            this.usernameTextBox = new System.Windows.Forms.TextBox();
            this.usernameLabel = new System.Windows.Forms.Label();
            this.passwordLabel = new System.Windows.Forms.Label();
            this.passwordTextBox = new System.Windows.Forms.TextBox();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.loginButton = new System.Windows.Forms.Button();
            this.nomEntreprise = new System.Windows.Forms.Label();
            this.nomEntrepriseTextBox = new System.Windows.Forms.TextBox();
            this.contactEntreprise = new System.Windows.Forms.Label();
            this.contactEntrepriseTextBox = new System.Windows.Forms.TextBox();
            this.nbLettreEnvoye = new System.Windows.Forms.Label();
            this.nbLettreEnvoyeTextBox = new System.Windows.Forms.TextBox();
            this.resultat = new System.Windows.Forms.Label();
            this.resultatTextBox = new System.Windows.Forms.TextBox();
            this.dateEntretien = new System.Windows.Forms.Label();
            this.dateEntretienTextBox = new System.Windows.Forms.TextBox();
            this.nbLettreRecu = new System.Windows.Forms.Label();
            this.nbLettreRecuTextBox = new System.Windows.Forms.TextBox();
            this.id_utilisateur = new System.Windows.Forms.Label();
            this.idUtilisateurTextBox = new System.Windows.Forms.TextBox();
            this.validerForm = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // usernameTextBox
            // 
            this.usernameTextBox.Location = new System.Drawing.Point(132, 24);
            this.usernameTextBox.Name = "usernameTextBox";
            this.usernameTextBox.Size = new System.Drawing.Size(190, 20);
            this.usernameTextBox.TabIndex = 0;
            // 
            // usernameLabel
            // 
            this.usernameLabel.AutoSize = true;
            this.usernameLabel.Location = new System.Drawing.Point(28, 27);
            this.usernameLabel.Name = "usernameLabel";
            this.usernameLabel.Size = new System.Drawing.Size(84, 13);
            this.usernameLabel.TabIndex = 1;
            this.usernameLabel.Text = "Nom d\'utilisateur";
            // 
            // passwordLabel
            // 
            this.passwordLabel.AutoSize = true;
            this.passwordLabel.Location = new System.Drawing.Point(380, 27);
            this.passwordLabel.Name = "passwordLabel";
            this.passwordLabel.Size = new System.Drawing.Size(71, 13);
            this.passwordLabel.TabIndex = 3;
            this.passwordLabel.Text = "Mot de passe";
            // 
            // passwordTextBox
            // 
            this.passwordTextBox.Location = new System.Drawing.Point(468, 24);
            this.passwordTextBox.Name = "passwordTextBox";
            this.passwordTextBox.Size = new System.Drawing.Size(190, 20);
            this.passwordTextBox.TabIndex = 2;
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 7;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 37.12434F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 62.87566F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 366F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 252F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 301F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 299F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 274F));
            this.tableLayoutPanel1.Location = new System.Drawing.Point(31, 524);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 1;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(1990, 65);
            this.tableLayoutPanel1.TabIndex = 4;
            // 
            // loginButton
            // 
            this.loginButton.Location = new System.Drawing.Point(702, 22);
            this.loginButton.Name = "loginButton";
            this.loginButton.Size = new System.Drawing.Size(122, 23);
            this.loginButton.TabIndex = 5;
            this.loginButton.Text = "Connexion";
            this.loginButton.UseVisualStyleBackColor = true;
            // 
            // nomEntreprise
            // 
            this.nomEntreprise.AutoSize = true;
            this.nomEntreprise.Location = new System.Drawing.Point(122, 130);
            this.nomEntreprise.Name = "nomEntreprise";
            this.nomEntreprise.Size = new System.Drawing.Size(97, 13);
            this.nomEntreprise.TabIndex = 7;
            this.nomEntreprise.Text = "Nom de l\'entreprise";
            // 
            // nomEntrepriseTextBox
            // 
            this.nomEntrepriseTextBox.Location = new System.Drawing.Point(226, 127);
            this.nomEntrepriseTextBox.Name = "nomEntrepriseTextBox";
            this.nomEntrepriseTextBox.Size = new System.Drawing.Size(190, 20);
            this.nomEntrepriseTextBox.TabIndex = 6;
            // 
            // contactEntreprise
            // 
            this.contactEntreprise.AutoSize = true;
            this.contactEntreprise.Location = new System.Drawing.Point(175, 170);
            this.contactEntreprise.Name = "contactEntreprise";
            this.contactEntreprise.Size = new System.Drawing.Size(44, 13);
            this.contactEntreprise.TabIndex = 9;
            this.contactEntreprise.Text = "Contact";
            // 
            // contactEntrepriseTextBox
            // 
            this.contactEntrepriseTextBox.Location = new System.Drawing.Point(226, 167);
            this.contactEntrepriseTextBox.Name = "contactEntrepriseTextBox";
            this.contactEntrepriseTextBox.Size = new System.Drawing.Size(190, 20);
            this.contactEntrepriseTextBox.TabIndex = 8;
            // 
            // nbLettreEnvoye
            // 
            this.nbLettreEnvoye.AutoSize = true;
            this.nbLettreEnvoye.Location = new System.Drawing.Point(81, 214);
            this.nbLettreEnvoye.Name = "nbLettreEnvoye";
            this.nbLettreEnvoye.Size = new System.Drawing.Size(139, 13);
            this.nbLettreEnvoye.TabIndex = 11;
            this.nbLettreEnvoye.Text = "Nombre de lettres envoyées";
            // 
            // nbLettreEnvoyeTextBox
            // 
            this.nbLettreEnvoyeTextBox.Location = new System.Drawing.Point(226, 211);
            this.nbLettreEnvoyeTextBox.Name = "nbLettreEnvoyeTextBox";
            this.nbLettreEnvoyeTextBox.Size = new System.Drawing.Size(190, 20);
            this.nbLettreEnvoyeTextBox.TabIndex = 10;
            // 
            // resultat
            // 
            this.resultat.AutoSize = true;
            this.resultat.Location = new System.Drawing.Point(173, 338);
            this.resultat.Name = "resultat";
            this.resultat.Size = new System.Drawing.Size(46, 13);
            this.resultat.TabIndex = 17;
            this.resultat.Text = "Résultat";
            // 
            // resultatTextBox
            // 
            this.resultatTextBox.Location = new System.Drawing.Point(226, 335);
            this.resultatTextBox.Name = "resultatTextBox";
            this.resultatTextBox.Size = new System.Drawing.Size(190, 20);
            this.resultatTextBox.TabIndex = 16;
            // 
            // dateEntretien
            // 
            this.dateEntretien.AutoSize = true;
            this.dateEntretien.Location = new System.Drawing.Point(137, 294);
            this.dateEntretien.Name = "dateEntretien";
            this.dateEntretien.Size = new System.Drawing.Size(82, 13);
            this.dateEntretien.TabIndex = 15;
            this.dateEntretien.Text = "Date d\'entretien";
            // 
            // dateEntretienTextBox
            // 
            this.dateEntretienTextBox.Location = new System.Drawing.Point(226, 291);
            this.dateEntretienTextBox.Name = "dateEntretienTextBox";
            this.dateEntretienTextBox.Size = new System.Drawing.Size(190, 20);
            this.dateEntretienTextBox.TabIndex = 14;
            // 
            // nbLettreRecu
            // 
            this.nbLettreRecu.AutoSize = true;
            this.nbLettreRecu.Location = new System.Drawing.Point(94, 254);
            this.nbLettreRecu.Name = "nbLettreRecu";
            this.nbLettreRecu.Size = new System.Drawing.Size(125, 13);
            this.nbLettreRecu.TabIndex = 13;
            this.nbLettreRecu.Text = "Nombre de lettres reçues";
            // 
            // nbLettreRecuTextBox
            // 
            this.nbLettreRecuTextBox.Location = new System.Drawing.Point(226, 251);
            this.nbLettreRecuTextBox.Name = "nbLettreRecuTextBox";
            this.nbLettreRecuTextBox.Size = new System.Drawing.Size(190, 20);
            this.nbLettreRecuTextBox.TabIndex = 12;
            // 
            // id_utilisateur
            // 
            this.id_utilisateur.AutoSize = true;
            this.id_utilisateur.Location = new System.Drawing.Point(156, 380);
            this.id_utilisateur.Name = "id_utilisateur";
            this.id_utilisateur.Size = new System.Drawing.Size(63, 13);
            this.id_utilisateur.TabIndex = 19;
            this.id_utilisateur.Text = "Id utilisateur";
            // 
            // idUtilisateurTextBox
            // 
            this.idUtilisateurTextBox.Location = new System.Drawing.Point(226, 377);
            this.idUtilisateurTextBox.Name = "idUtilisateurTextBox";
            this.idUtilisateurTextBox.Size = new System.Drawing.Size(190, 20);
            this.idUtilisateurTextBox.TabIndex = 18;
            // 
            // validerForm
            // 
            this.validerForm.Location = new System.Drawing.Point(258, 415);
            this.validerForm.Name = "validerForm";
            this.validerForm.Size = new System.Drawing.Size(122, 23);
            this.validerForm.TabIndex = 20;
            this.validerForm.Text = "Valider";
            this.validerForm.UseVisualStyleBackColor = true;
            this.validerForm.Click += new System.EventHandler(this.validerForm_Click);
            // 
            // collegeAsimov
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(2078, 1012);
            this.Controls.Add(this.validerForm);
            this.Controls.Add(this.id_utilisateur);
            this.Controls.Add(this.idUtilisateurTextBox);
            this.Controls.Add(this.resultat);
            this.Controls.Add(this.resultatTextBox);
            this.Controls.Add(this.dateEntretien);
            this.Controls.Add(this.dateEntretienTextBox);
            this.Controls.Add(this.nbLettreRecu);
            this.Controls.Add(this.nbLettreRecuTextBox);
            this.Controls.Add(this.nbLettreEnvoye);
            this.Controls.Add(this.nbLettreEnvoyeTextBox);
            this.Controls.Add(this.contactEntreprise);
            this.Controls.Add(this.contactEntrepriseTextBox);
            this.Controls.Add(this.nomEntreprise);
            this.Controls.Add(this.nomEntrepriseTextBox);
            this.Controls.Add(this.loginButton);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Controls.Add(this.passwordLabel);
            this.Controls.Add(this.passwordTextBox);
            this.Controls.Add(this.usernameLabel);
            this.Controls.Add(this.usernameTextBox);
            this.Name = "collegeAsimov";
            this.Text = "College_Asimov";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox usernameTextBox;
        private System.Windows.Forms.Label usernameLabel;
        private System.Windows.Forms.Label passwordLabel;
        private System.Windows.Forms.TextBox passwordTextBox;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Button loginButton;
        private System.Windows.Forms.Label nomEntreprise;
        private System.Windows.Forms.TextBox nomEntrepriseTextBox;
        private System.Windows.Forms.Label contactEntreprise;
        private System.Windows.Forms.TextBox contactEntrepriseTextBox;
        private System.Windows.Forms.Label nbLettreEnvoye;
        private System.Windows.Forms.TextBox nbLettreEnvoyeTextBox;
        private System.Windows.Forms.Label resultat;
        private System.Windows.Forms.TextBox resultatTextBox;
        private System.Windows.Forms.Label dateEntretien;
        private System.Windows.Forms.TextBox dateEntretienTextBox;
        private System.Windows.Forms.Label nbLettreRecu;
        private System.Windows.Forms.TextBox nbLettreRecuTextBox;
        private System.Windows.Forms.Label id_utilisateur;
        private System.Windows.Forms.TextBox idUtilisateurTextBox;
        private System.Windows.Forms.Button validerForm;
    }
}

