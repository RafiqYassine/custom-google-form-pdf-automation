function aftersub(e){
  const info = e.namedValues
  const pdfile=createpdf(info)
  sendemail(info['Email address'][0],pdfile,info)
}
function sendemail(email,file,info){
  GmailApp.sendEmail(email,"Votre PDF est prêt à être imprimé  Merci !",`Bonjour ${info['Nom'][0]} ${info['Prénom '][0]} ,
Merci d'avoir rempli le formulaire.
Veuillez trouver ci-joint votre PDF.
Vous pouvez l'imprimer et le ramener à la direction selon les instructions.
Si vous avez des questions, n'hésitez pas à nous contacter.
Encore merci pour votre confiance,
L'équipe centre des consultations externe `,
    {
      attachments:[file],
      name:"centre des consultations externe"
    })
}
function createpdf(info) {
  const pdffolder=DriveApp.getFolderById("1Gu4iWgV_F4HRvSrvagkWK6bYSIOHHiaJ");
  const tempfolder=DriveApp.getFolderById("12mYaFYDhNfTus_bY3E4HJVKbmPcauVFx");
  const templatedoc=DriveApp.getFileById("1f9QMMT0w-kIvVEOcqf1b4V-M7drzBPvE4y-GqLoSIaU")

  const today = new Date();
  const formattedDate = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd/MM/yyyy");
  const newtempfile = templatedoc.makeCopy(tempfolder)
  const opendoc =  DocumentApp.openById(newtempfile.getId())
  const body=opendoc.getBody()
  const header=opendoc.getHeader()
  const service = (info['service'] && info['service'][0]) ? info['service'][0] : (info['service '] ? info['service '][0] : "");
  body.replaceText("{Nom}",info['Nom'][0])
  body.replaceText("{Prenom}",info['Prénom '][0])
  body.replaceText("{hopitall}",info['Hôpital'][0])
  body.replaceText("{Service}",service)
  body.replaceText("{tyact}",info["type d'acte"][0])
  body.replaceText("{hosix}",info["  Disposez-vous actuellement d’un compte  HOSIX"][0])
  body.replaceText("{Grade}",info['Grade'][0])
  body.replaceText("{tel}",info['téléphone'][0])
  body.replaceText("{Em}",info['Email address'][0])
  body.replaceText("{INPE}",info['INPE'][0])
  body.replaceText("{horaire}",info['Plage horaire '][0])
  body.replaceText("{jour}",info['Le jour de la consultation '][0])
  body.replaceText("{nom-consultation}",info['Nom de la consultation '][0])
  body.replaceText("{quota}",info['Quota '][0])
  body.replaceText("{dt}", formattedDate); 
  header.replaceText("{dt}", formattedDate);
  


  opendoc.saveAndClose()


  const blobpdf = newtempfile.getAs(MimeType.PDF)
  const pdffile = pdffolder.createFile(blobpdf).setName(info['Nom'][0]+" "+info['Prénom '][0])
  tempfolder.removeFile(newtempfile)
  return blobpdf


}

