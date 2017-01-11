$.afui.useOSThemes=false;
    $.afui.loadDefaultHash=true;
    $.afui.autoLaunch=false;

    //check search
    var search=document.location.search.toLowerCase().replace("?","");
    if(search.length>0)
    {

       $.afui.useOSThemes=true;
        if(search=="win8")
            $.os.ie=true;
        else if(search=="firefox")
            $.os.fennec="true"
        $.afui.ready(function(){
            $(document.body).get(0).className=(search);
        });
    }

    $(document).ready(function(){
        $.afui.launch();
		
		localStorage.location_error=''
		$("#wait_image_login").hide();
		$('#menu_lv').empty()
		$('#menu_lv').append(localStorage.menu_list);
		
		$("#wait_image_login").hide();
		$("#loginButton").show();
		
		$("#wait_image_schedule_date").hide();		
		$("#btn_schedule_date").show();
		
		$("#wait_image_schedule_ret").hide();		
		$("#btn_schedule_ret").show();
		
		$("#wait_image_unschedule_market").hide();		
		$("#btn_unschedule_market").show();
		
		$("#wait_image_ret").hide();	
		$("#wait_image_unschedule_market_ret").hide();		
		$("#btn_unschedule_market_ret").show();
		
		$("#wait_image_visit_submit").hide();		
		$("#visit_submit").show();
		
		$("#wait_image_delivery_submit").hide();		
		$("#btn_delivery_submit").show();
		
		$("#wait_image_delivery_dealer").hide();		
		$("#btn_delivery_dealer").show();
		
		$("#wait_image_profile_market").hide();		
		$("#btn_profile_market").show();
		
		$("#wait_image_profile_market_ret").hide();		
		$("#btn_profile_market_ret").show();
		
		$("#wait_image_profile_update").hide();		
		$("#btn_profile_update").show();
		
		$("#wait_image_visit_plan_market").hide();		
		$("#btn_visit_plan_market").show();
		
		$("#wait_image_visit_plan_submit").hide();		
		$("#btn_visit_plan_submit").show();
		
		$("#wait_image_visit_report").hide();
		
		$("#wait_image_complain_submit").hide();
		$("#btn_complain_submit").show();	
		
		$("#wait_image_region_report").hide();
		
		//$("#visit_location_doc").show();
		$("#visit_submit_doc").show();	
		$("#checkLocation_doc").html('');
		$("#wait_image_visit_submit_doc").hide('');
		
		$("#order_load").hide();
		
		$("#wait_image_stock").hide();
		$("#wait_image_outstanding").show();
		
		
		getLocationInfo_ready();
		
		//$("#se_mpo").val(localStorage.user_id);

		//alert (localStorage.unschedule_market_cmb_id)
		$('#market_combo_id_lv').empty();
		$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
		$('#item_combo_id_lv').empty()
		$('#item_combo_id_lv').append(localStorage.product_tbl_str);
		
		
		$("#item_combo_id").val('A')
		searchProduct()
		//bonusCombo()
		 page_stock()
		
		
		$('#campaign_combo_id_lv').empty();
		$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
		$('#sample_combo_id_lv').empty();
		$('#sample_combo_id_lv').append(localStorage.product_tbl_str_doc_sample);
		$('#gift_combo_id_lv').empty();
		$('#gift_combo_id_lv').append(localStorage.gift_tbl_doc);
		//alert (localStorage.product_tbl_doc_sample)
		$('#ppm_combo_id_lv').empty();
		$('#ppm_combo_id_lv').append(localStorage.ppm_tbl_doc);
		

		$('#visit_submit').hide();
		
		if (localStorage.user_type=='sup'){
		 checkRequest()
		}
		checkInbox();
		
		if ((localStorage.doctor_flag==1) && (localStorage.visit_page=="YES")){
		
			campaign_show_1=localStorage.campaign_show_1;
			gift_show_1=localStorage.gift_show_1;
			sample_show_1=localStorage.sample_show_1;
			
			ppm_show_1=localStorage.ppm_show_1;
			
			//alert (localStorage.sample_show_1);
			
			
			if  ((campaign_show_1.length > 0 ) & (campaign_show_1.indexOf('undefined')==-1 )){
				$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+"</br>");
			}
			if  ((gift_show_1.length > 0 ) & (gift_show_1.indexOf('undefined')==-1 )){
				$("#doc_gift").html("</br>"+localStorage.gift_show_1+"</br>");	
			}
			if  ((ppm_show_1.length > 0 ) & (ppm_show_1.indexOf('undefined')==-1 )){
				$("#doc_ppm").html("</br>"+localStorage.ppm_show_1+"</br>");	
			}
			if  ((sample_show_1.length > 0 ) & (sample_show_1.indexOf('undefined')==-1 )){
				$("#doc_sample").html("</br>"+localStorage.sample_show_1+"</br>");
			}
	
			$(".market").html(localStorage.visit_market_show);
			$(".visit_client").html(localStorage.visit_client_show);
			
			
			
			//var url = "#page_visit_doc";
	//		$.mobile.navigate(url);	
		}
		
		//================== Redirect to visit page
		
		else if ((localStorage.doctor_flag==0) &&(localStorage.visit_page=="YES")){
			$("#sch_date").val(localStorage.scheduled_date);
			
			$(".market").html(localStorage.visit_market_show);
			$(".visit_distributor").html(localStorage.visit_distributor_nameid);
			$(".visit_type").html(localStorage.visit_type);								
			$(".s_date").html(localStorage.scheduled_date);
			$(".visit_client").html(localStorage.visit_client_show);
			mobile_off_flag=1;
			
			//var url = "#page_visit ";
	//		$.mobile.navigate(url);	
			getOrder_load();	
		}
		
		
			//first_page();
			
	
		if (localStorage.visit_location_flag!='YES'){
				$("#visit_location").hide();
				$("#visit_submit").show();
		}
		if (localStorage.delivery_date_flag=='YES'){
			$("#delivery_date_div").show();
		}
		else{
			$("#delivery_date_div").hide();
		}
		if (localStorage.collection_date_flag=='YES'){
			$("#collection_date_div").show();
		}
		else{
			$("#collection_date_div").hide();
		}
		if (localStorage.payment_date_flag=='YES'){
			$("#payment_date_div").show();
		}
		else{
			$("#payment_date_div").hide();
		}
		if (localStorage.payment_mode_flag=='YES'){
			localStorage.payment_mode='Cash'
			$("#payment_mode_div").show();
		}
		else{
			$("#payment_mode_div").hide();
		}
		
		//reports();
	
	
	$('#order_report_button').empty();
	$('#order_report_button').append(localStorage.report_button).trigger('create');
	
	$('#doctor_report_button').empty();
	$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');
	
	$('#prescription_report_button').empty();
	$('#prescription_report_button').append(localStorage.prescription_report_button).trigger('create');
	
	//set doctor
	$('#doctor_campaign_list_tbl').html(localStorage.product_tbl_str_doc_campaign);
	$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);
	$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
	$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
		
	$("#product_total_cart").html(localStorage.show_total);
	$("#product_total_last").html(localStorage.show_total);	
	
	
	var currentDate = new Date()
	var day = currentDate.getDate();if(day.length==1)	{day="0" +day_1};
	var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
	var year = currentDate.getFullYear()
	var today=  year + "-" + month + "-" + day
							
							
	
		//currentDate=2016-03-11
		//localStorage.synced=''
		//alert (today);
		//alert (localStorage.sync_date);
		if ((localStorage.synced=='YES')){
			$("#cid").val(localStorage.cid);
			$("#user_id").val(localStorage.user_id);
			$("#user_pass").val(localStorage.user_pass);
			//$.afui.loadContent("#pageHome",true,true,'right');
			
		}
		if ((localStorage.synced=='YES') & (localStorage.sync_date==today)){
			$.afui.loadContent("#pageHome",true,true,'right');
		}
		
		
    });

    //if($.os.ios)
        $.afui.animateHeader(true);
	//	getLocation()









var mobile_off_flag=0;
//function homePage_refresh() {
//	$("#error_login").html('');
//	//location.reload();
//	$.afui.loadContent("#pageHome",true,true,'right');
//	
//}
function page_tour_pending() {;									
	$.afui.loadContent("#page_tour_pending",true,true,'right');
}
function page_tour_market() {;									
	$.afui.loadContent("#page_tour_market",true,true,'right');
}
function page_cancel_pending() {;									
	$.afui.loadContent("#page_cancel_pending",true,true,'right');
}


function page_saved_Doc() {
	//alert (localStorage.docSaveData)
	var docSaveData=localStorage.docSaveData
	var docSaveDataList = docSaveData.split('<doc>');	
	var docSaveDataListLength=docSaveDataList.length
	var docSaveStr=''
	
	for ( i=0; i < docSaveDataListLength-1; i++){	
		var singleDoc=docSaveDataList[i]
		var docShowList=singleDoc.split('<d>');
		//alert (docShowList[0])
		//docSaveStr=docSaveStr+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" > <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr><td onClick="saved_Doc_set(\''+i+'\');">'+docShowList[0]+'</td><td width="60px"><input  type="submit" onClick="saveDelete_doc(\''+i+'\');"   style=" background-color:#09C; color:#FFF; font-size:12px; width:50px; ;  " value=" OK "    /></td></tr></table></li>'
		docSaveStr=docSaveStr+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" > <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr><td onClick="saved_Doc_set(\''+i+'\');">'+docShowList[0]+'</td><td width="60px"></td></tr></table></li>'
	}
	$('#saved_visit_doc').empty()
	$('#saved_visit_doc').append(docSaveStr);									
	$.afui.loadContent("#page_saved_Doc",true,true,'right');
}
function saveDelete_doc(i) {
	var docSaveData=localStorage.docSaveData
	var docSaveDataList = docSaveData.split('<doc>');	
	var replaceStr=docSaveDataList[i]+'<doc>'
	docSaveData=docSaveData.replace(replaceStr,'')
	localStorage.docSaveData=docSaveData
	
	
	docSaveData=localStorage.docSaveData
	var docSaveDataList = docSaveData.split('<doc>');	
	var docSaveDataListLength=docSaveDataList.length
	var docSaveStr=''
	for ( i=0; i < docSaveDataListLength-1; i++){	
		var singleDoc=docSaveDataList[i]
		var docShowList=singleDoc.split('<d>');
		//alert (docShowList[0])
		docSaveStr=docSaveStr+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" > <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr><td onClick="saved_Doc_set(\''+i+'\');">'+docShowList[0]+'</td><td width="60px"><input  type="submit" onClick="saveDelete_doc(\''+i+'\');"   style=" background-color:#09C; color:#FFF; font-size:12px; width:50px; ;  " value=" OK "    /></td></tr></table></li>'
	}
	$('#saved_visit_doc').empty()
	$('#saved_visit_doc').append(docSaveStr);				
	
}


function saved_Doc_set(i) {
	$("#errorChkVSubmit_doc").val("")
	var docSaveData=localStorage.docSaveData
	var docSaveDataList = docSaveData.split('<doc>');	
	var docSaveDataListLength=docSaveDataList.length
	var docSaveStr=docSaveDataList[i]
	var docShowList=docSaveStr.split('<d>');
	//docSaveData+localStorage.visit_client+'<d>'+localStorage.visit_market_show+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+localStorage.productSampleStr+'<d>'+localStorage.productGiftStr+'<d>'+localStorage.campaign_doc_str+'<d>'+localStorage.productppmStr+'<d>'+notes+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<doc>'	
	var visitClientId=docShowList[2]
	var visit_type=docShowList[3]
	var scheduled_date=docShowList[4]
	var productSampleStr=docShowList[5]
	var productGiftStr=docShowList[6]
	var campaign_doc_str=docShowList[7]
	var productppmStr=docShowList[8]
	var lat=docShowList[9]
	var longitude=docShowList[10]
	var v_with=docShowList[11]
	var market_Id=docShowList[12]
	var doc_others=docShowList[13]
	var notes=docShowList[14]
	
	//alert ('sadasf')
	localStorage.visit_client=docShowList[0]
	localStorage.visit_type=visit_type
	localStorage.scheduled_date=scheduled_date
	localStorage.campaign_doc_str=campaign_doc_str
	localStorage.productGiftStr=productGiftStr
	localStorage.productSampleStr=productSampleStr
	localStorage.productppmStr=productppmStr

	$("#doc_feedback").val(notes)
	$("#doc_others").val(doc_others);
	
	$(".visit_client").html(docShowList[0]);
	$(".market").html(docShowList[1]);
	
	
	getDocCampaignData();
	//getDocSampleData();
	getDocGiftDataPlan();
	getDocppmDataPlan();
	localStorage.saveSubmitDocFlag=1;
	localStorage.saveSubmitDocI=i;
						
	//$.afui.loadContent("#page_visit_doc",true,true,'right');
}





function homePage() {
	var currentDate = new Date()
	var day = currentDate.getDate();if(day.length==1)	{day="0" +day_1};
	var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
	var year = currentDate.getFullYear()
	var today=  year + "-" + month + "-" + day
							

	if ((localStorage.synced=='YES') & (localStorage.sync_date==today)){
		$.afui.loadContent("#pageHome",true,true,'right');
	}
	//$("#error_login").html('');
	//$.afui.loadContent("#pageHome",true,true,'right');
}
function page_market() {
	//alert (localStorage.tourFlag)
	if (localStorage.tourFlag==1){
		addMarketListTour();
		
	}
	else if (localStorage.doctor_plan_flag==1){
		doctor_visit_plan();
	}
	else{
	
		if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {
			addMarketListCteam();}
		else{
			
			addMarketList();}
	}
	//$.afui.loadContent("#page_market",true,true,'right');
}
function page_market_ret() {
	
	if (localStorage.doctor_flag==1) {addMarketListCteam();}else{addMarketList();}
	
	$("#addDocanc").hide();
	$("#blankAnc").show();
	$.afui.loadContent("#page_market_ret",true,true,'right');
}
function page_market_ret_doc() {
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$.afui.loadContent("#page_market_ret",true,true,'right');
}
function page_visit() {
	addMarketList();
	$("#wait_image_visit_submit").hide();
	$.afui.loadContent("#page_visit",true,true,'right');
}
function page_visit_doc() {
	
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$("#wait_image_visit_submit_doc").hide();
	//alert (localStorage.doctor_plan_flag)
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	$("#errorChkVSubmit_doc").val("");
	
	$.afui.loadContent("#page_visit_doc",true,true,'right');
}
function page_reports_dcr() {
	//$("#order_load").hide();
	$.afui.loadContent("#page_reports_dcr",true,true,'right');
}

function page_login() {
	//$("#order_load").hide();
	$.afui.loadContent("#login",true,true,'right');
}
function page_inbox() {
	$("#error_inbox").html('');
	$("#error_inboxTxt").val(localStorage.report_url+'infoInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
			//alert (localStorage.report_url+'infoInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
			$.ajax(localStorage.report_url+'infoInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								
								$("#error_inbox").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 
									 if (status!='success'){
										$("#error_inbox").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_inbox").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
								var result_string=resultArray[1];
								$("#inbox").html(result_string);
								
							}else{	
								$("#error_inbox").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_inbox",true,true,'right');
}
function page_promo_refresh() {
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var promoDate=localStorage.promoDate.replace(' AM','').replace(' PM','')
	
	//month="'"+month+"'"
	var flag=''
	var d2 = new Date();
	if (promoDate.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(promoDate);
	}
    var d1 = new Date(promoDate);
	var sec_time=(((d2-d1)/1000))/60;
	$("#error_promo").html('');
	//alert (parseInt(sec_time))
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
		localStorage.promo_str_report=''
		page_promo()
	}
	else{
		$("#error_promo").html('Please try later');
		$("#wait_image_promo").hide();
		$("#promo").html(localStorage.promo_str_report);
	}
	
	
}


function page_promo_main(){

	page_promo()
	$.afui.loadContent("#page_promo",true,true,'right');
}
function page_promo() {
	// ajax-------	
	$("#wait_image_promo").show();
	
	$("#error_promo").html('');
	$("#error_promoTxt").val(localStorage.report_url+'infoPromo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
	
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var promoDate=localStorage.promoDate.replace(' AM','').replace(' PM','')
	
	//month="'"+month+"'"
	//alert ('Nadira')
	var d2 = new Date();
    var flag=''
	var d2 = new Date();
	if (promoDate.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(promoDate);
	}
    var d1 = new Date(promoDate);
	var sec_time=(((d2-d1)/1000))/60;
	
	
	
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
			if (localStorage.promo_str_report==''){
					$.ajax(localStorage.report_url+'infoPromo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
											$("#wait_image_promo").hide();
											$("#error_promo").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
											 $("#wait_image_promo").hide();
											 if (status!='success'){
												$("#error_promo").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
										if (resultArray[0]=='FAILED'){
													$("#error_promo").text(resultArray[0]);	
													
												}
										else if (resultArray[0]=='SUCCESS'){	
										var result_string=resultArray[1];
										var dt = new Date();
										var hour=dt.getHours();if(hour>12){hour=hour-12};
										var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
										var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
										var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
										var year = dt.getFullYear()
										var today=  year + "-" + month + "-" + day +' '+time
										if (dt.getHours() > 12 ) {today=today+ ' PM'} else {today=today+ ' AM'};
										localStorage.promoDate=today
										result_string='<font style="color:#8A0045; font-size:18px">'+'Updated on:'+localStorage.promoDate+'</font><br>'+result_string
										$("#promo").html(result_string);
										
										localStorage.promo_str_report=result_string
									}else{	
										$("#wait_image_promo").hide();
										$("#error_promo").html('Network Timeout. Please check your Internet connection.');
										}
								}
							  }
					 });//end ajax
			}
			else{
				$("#wait_image_promo").hide();
				$("#promo").html(localStorage.promo_str_report);
			}
	
	}else{
		$("#error_promo").html('Please try later');
		$("#wait_image_promo").hide();
		$("#promo").html(localStorage.promo_str_report);
	}
}
function page_kpi() {
	
	$.ajax(localStorage.report_url+'infoKpi?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								
								$("#error_kpi").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 
									 if (status!='success'){
										$("#error_kpi").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_kpi").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
								var result_string=resultArray[1];
								$("#kpi").html(result_string);
								
							}else{	
								$("#error_kpi").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	$.afui.loadContent("#page_kpi",true,true,'right');
}
function page_help() {
	$.ajax(localStorage.report_url+'infoHelp?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								
								$("#error_help").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 
									 if (status!='success'){
										$("#error_help").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_help").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
								var result_string=resultArray[1];
								$("#help").html(result_string);
								
							}else{	
								$("#error_help").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	$.afui.loadContent("#page_help",true,true,'right');
}







function reload_function() {
	location.reload();
}


function getLocationInfo() { //location
	$("#lat").val(0);
	$("#longitude").val(0);
	
	
	$("#wait_image_visit_submit").show()
	$("#visit_submit").hide();
	$("#visit_location").hide();
	
	
	
	
	$("#wait_image_visit_submit_doc").hide()
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
	$("#checkLocation_doc").html('');
	
	
	
	$("#errorChkVSubmit").html('');
	//$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:15000};
	//var options = { enableHighAccuracy: true, timeout:1000};
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
}

function onSuccess(position) {
	
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	//$("#lat_p").val(position.coords.latitude);
	//$("#long_p").val(position.coords.longitude);
	
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	
	
	
	
	
	$("#checkLocation").html('Location Confirmed'); 
	//$("#checkLocationProfileUpdate").html('Location Confirmed');
		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
	localStorage.location_error=''
	codeLatLng(position.coords.latitude, position.coords.longitude)
	
	
	
	
	
	
} 
function onError(error) {
	
	localStorage.location_error=error.code
	
	
	
	//alert (localStorage.location_error)
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	//$("#lat_p").val(0);
	//$("#long_p").val(0);

	if (localStorage.location_error==2){
		$("#checkLocation").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		//$("#checkLocationProfileUpdate").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		$("#checkLocation_doc").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');

	}else{
		$("#checkLocation").html('Location can not be found. Last Location will be submitted.');
		//$("#checkLocationProfileUpdate").html('Location can not be found. Last Location will be submitted.');
		$("#checkLocation_doc").html('Location can not be found. Last Location will be submitted.');
	}
	
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
}


//==Reload Location
function getLocationInfo_ready() { //location
	$("#wait_image_visit_submit").show()
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation").html(''); 
	//$("#checkLocationProfileUpdate").html('');
	
	
	$("#wait_image_visit_submit_doc").hide()
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
	
	$("#checkLocation_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:30000};
	navigator.geolocation.getCurrentPosition(onSuccess_ready, onError_ready, options);
}

// onSuccess Geolocationshom

function onSuccess_ready(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	//$("#lat_p").val(position.coords.latitude);
	//$("#long_p").val(position.coords.longitude);
	
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	
	
	$("#errorChkVSubmit").html('');
	//$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	
	$("#checkLocation").html('Location Confirmed'); 
	//$("#checkLocationProfileUpdate").html('Location Confirmed');
		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
	//alert (position.coords.longitude)
	geocoder = new google.maps.Geocoder();
	codeLatLng(position.coords.latitude, position.coords.longitude)
	
	
} 
function onError_ready(error) {
	
	//alert (error);
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	//$("#lat_p").val(0);
	//$("#long_p").val(0);
	//localStorage.location_detail='';
	
	//$("#checkLocation").html('Location not found. Last Location will submit.');
	//$("#checkLocationProfileUpdate").html('Location not found. Last Location will submit.');
	
	
	$("#checkLocation").html(''); 
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
    $("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
}






//========================================

function codeLatLng(lat, lng) {
	
    var geocoder;
	//alert ('sdfds')
	geocoder = new google.maps.Geocoder();
	
	var latlng = new google.maps.LatLng(lat, lng);
	//alert (latlng)
	geocoder.geocode(
		{'latLng': latlng}, 
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
					if (results[0]) {
						
						var add= results[0].formatted_address ;
						var add1= results[1].formatted_address ;
						var add2= results[2].formatted_address ;
						//alert (add2)
						//alert (add1)
						var  value=add.split(",");
						var  value1=add1.split(",");
						var  value2=add2.split(",");
						
						state=value2[1];
						city=value2[0];
						area=value1[0];
						road=value[0];
						localStorage.location_detail=state+','+city+','+area+','+road;
						//alert (localStorage.location_detail)
					}
					else  {
						alert("address not found");
					}
			}
			 else {
				alert("Geocoder failed due to: " + status);
			}
		}
	);
  }

//====================================
//set confirm page

function set_confirm_page(){
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#visit_location").show();
	
	
	//$("#lat").val(0);
	//$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html('');
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	//$("#visit_location_doc").show();
	$("#checkLocation_doc").html('');
	
	
}
// -------------- If Not synced, Show login
function first_page(){
	//localStorage.synced=''
	//alert (localStorage.synced)
	if ((localStorage.synced!='YES')){
		
		$.afui.loadContent("#login",true,true,'right');	
		//$.afui.loadContent("#pageHome",true,true,'right');
	}
	else{	
		$.afui.loadContent("#pageHome",true,true,'right');
	}
}

// -------------- visit page show if mobile off 
function cancelVisitPage(){
	localStorage.visit_page=""
	mobile_off_flag=0;
	
	localStorage.visitMarketStr=""
	localStorage.visit_distributor_nameid=""
	localStorage.visit_type=""
	localStorage.scheduled_date="" 
	localStorage.visit_client=""
	
	localStorage.productListStr='';
	localStorage.product_tbl_cart='';
	cancel_cart();
	
	
	//$("#btn_visit_submit").hide();
	
	
//	============Doctor=========
	localStorage.campaign_show_1="";
	localStorage.gift_show_1="";
	localStorage.ppm_show_1=""
	localStorage.sample_show_1="";
	
	
	
	localStorage.productGiftStr='';
	localStorage.campaign_doc_str=''
	localStorage.productSampleStr=''
	localStorage.productppmStr='';

	$(".visit_client").html('');
	
	
	set_doc_all();
	
	$.afui.loadContent("#pageHome",true,true,'right');


	
}
function set_doc_all(){
	// $('#doctor_campaign_list_tbl :checkbox').each(function () {    
//		 $(this).attr('checked', false);  //This will uncheck the current checkbox            
//	 });
	 $('#doc_campaign').html('');
	$('#doc_gift').html('');
	$('#doc_ppm').html('');
	$('#doc_sample').html('');
	
	 
	 $(".docCampaign").attr('checked', false);
	 $(".docSample").val('');
	 $(".docGift").val('');
	 $(".docPpm").val('');
	 
	 $('#doc_feedback').val('');
	 $('#doc_others').val('');
	 
	 $('#campaign_combo_id').val('');
	 $('#gift_combo_id').val('');
	 $('#ppm_combo_id').val('');
	 $('#sample_combo_id').val('');
	 
	 
	 
	//$("#visit_location_doc").show();
	$("#visit_submit_doc").show();	
	$("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide('');
	 
}
//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	
		localStorage.synced=''
		
		localStorage.client_string=''	
		localStorage.visit_client=''
		localStorage.client_string=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_marketlist_comboCteam=''
		localStorage.cTeam=0
		localStorage.tourFlag=0;
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		
		localStorage.visit_page=""
		
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		
		localStorage.productppmStr='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		localStorage.productOrder_change=''
		
		
		localStorage.report_button='';	
		localStorage.market_client=''
		localStorage.menu='';
		localStorage.ppm_string='';
		localStorage.user_type='';
		localStorage.market_doctor='';
		
		
		localStorage.saved_data_submit = 0;
		localStorage.visit_save = '';
		localStorage.saved_data_show = '';
		
		localStorage.payment_mode_get='';
		
		localStorage.location_detail=''
		$.afui.loadContent("#login",true,true,'right');

	};
}
function get_login() {
	$.afui.loadContent("#login",true,true,'right');

	}

function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	//Main

	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/demo/syncmobile_417_new/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	var  apipath_base_photo_dm='http://c003.cloudapp.net/demo/syncmobile_417_new/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	//var  apipath_base_photo_dm='http://c003.cloudapp.net/demo/syncmobile_417/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	

  // var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_20150502/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
 
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	var base_url='';
	var photo_url='';
	
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		

		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	

		
		localStorage.client_string=''	
		localStorage.visit_client=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_marketlist_comboCteam=''
		localStorage.cTeam=0
		localStorage.tourFlag=0;
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		localStorage.visit_page=""
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		localStorage.productppmtStr='';
		
		
		localStorage.market_client=''
		
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		localStorage.market_doctor='';
		localStorage.report_button='';
		localStorage.doctorreport_button='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		
		
		
		localStorage.visit_save=''; //Saved visit data
		localStorage.save_visit_limit=0;
		localStorage.saved_data_submit = 0;
		
		
		localStorage.delivery_date='';
		localStorage.payment_date='';
		localStorage.payment_mode='';
		
		localStorage.payment_mode_get='';
		
		localStorage.visit_location_flag='';
													
		localStorage.delivery_date_flag='';
		localStorage.payment_date_flag='';
		localStorage.payment_mode_flag='';
		localStorage.collection_date_flag='';
		
		localStorage.doctor_report_button='';
		localStorage.prescription_report_button='';
		localStorage.location_detail=''
		
		
		localStorage.stock_str='';
		localStorage.result_itemStock=''
		localStorage.stockDate=''
		
		localStorage.promo_str=''
		localStorage.promo_str_report=''
		localStorage.promoDate=''
		localStorage.tour_doc_str=''
		localStorage.tour_route_str=''
		localStorage.docSaveData=''
		
		localStorage.marketStrDoc=''
		localStorage.marketTourStr=''
		localStorage.docTThisMonthRow=''
		localStorage.docMarketComb=''
		//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#wait_image_login").show();
		$("#error_logintext").val(apipath_base_photo_dm);
		$.ajax(apipath_base_photo_dm,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
			type: 'POST',
			timeout: 30000,
			error: function(xhr) {
			$("#wait_image_login").hide();
			$("#loginButton").show();
			$("#error_login").html('Network Timeout. Please check your Internet connection..');
													},
			success:function(data, status,xhr){
		//$.post(apipath_base_photo_dm,{ },
//    	function(data, status){
			if (status=='success'){
				localStorage.base_url='';
				
				var dtaStr=data.replace('<start>','').replace('<end>','')
				var resultArray = dtaStr.split('<fd>');		
					if(resultArray.length==4){
						base_url=resultArray[0];
						photo_url=resultArray[1];
						photo_submit_url=resultArray[2];
						report_url=resultArray[3];
						
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}
						else{
//							--------------------------
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							localStorage.report_url=report_url;
							//alert (localStorage.report_url)
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
							
							
							var currentDate = new Date()
							var day = currentDate.getDate();if(day.length==1)	{day="0" +day_1};
							var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
							var year = currentDate.getFullYear()
							var today=  year + "-" + month + "-" + day
							
							//alert (currentDate)
							localStorage.sync_date=today;
							
							//alert (localStorage.sync_date)
							
							alert (localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
							$("#error_logintext").val(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	
							$.ajax(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_login").hide();
								$("#loginButton").show();
								$("#error_login").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#wait_image_login").hide();
											$("#loginButton").show();								
											$("#error_login").html(resultArray[1]);
										}
										else if (resultArray[0]=='SUCCESS'){
													//alert (resultArray)
													localStorage.synccode=resultArray[1];
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
													localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
													localStorage.gift_string=resultArray[11];
													localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
													localStorage.menu=resultArray[14];
													
													localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													//alert (localStorage.market_doctor)
													//$("#error_logintext").val(localStorage.market_doctor)
													localStorage.save_visit_limit=resultArray[18];
													//alert (localStorage.save_visit_limit)
													localStorage.visit_location_flag=resultArray[19];
													
													localStorage.delivery_date_flag=resultArray[20];
													localStorage.payment_date_flag=resultArray[21];
													localStorage.payment_mode_flag=resultArray[22];
													localStorage.collection_date_flag=resultArray[23];
													
													localStorage.promo_str=resultArray[24];
													
													
													localStorage.client_depot=resultArray[25];
													localStorage.client_depot_name=resultArray[26];
													
													localStorage.catStr=resultArray[27];
													localStorage.spcStr=resultArray[28];
													localStorage.marketListStrCteam=resultArray[29];
													localStorage.cTeam=resultArray[30]
													localStorage.marketStrDoc=resultArray[31]
													localStorage.marketTourStr=resultArray[32]
													localStorage.docTThisMonthRow=resultArray[33]
													//alert (localStorage.docTThisMonthRow)
													
													//alert (localStorage.menu)
													//alert (localStorage.cTeam)
													
													//localStorage.client_depot_name=resultArray[27];
													
													
													//
													if (localStorage.visit_location_flag!='YES'){
														//alert (localStorage.visit_location);
														$("#visit_location").hide();
														$("#visit_submit").show();
														
													}
													if (localStorage.delivery_date_flag=='YES'){
														$("#delivery_date_div").show();
													}
													else{
														$("#delivery_date_div").hide();
													}
													if (localStorage.collection_date_flag=='YES'){
														$("#collection_date_div").show();
													}
													else{
														$("#collection_date_div").hide();
													}
													if (localStorage.payment_date_flag=='YES'){
														$("#payment_date_div").show();
													}
													else{
														$("#payment_date_div").hide();
													}
													if (localStorage.payment_mode_flag=='YES'){
														localStorage.payment_mode='Cash'
														$("#payment_mode_div").show();
													}
													else{
														$("#payment_mode_div").hide();
													}
													//	==============Set menu start================\
												
												var menuList=localStorage.menu.split('<rd>');
												var menuLength=menuList.length;
												var menu_str=' '
												var order_report="No"
												var doctor_report="No"
												var prescription_report="No"
												for (var j=0; j < menuLength; j++){
													var single_menu_list = menuList[j].split('<fd>');
													var s_key=single_menu_list[0]
													var s_value=single_menu_list[1]
													if (s_value=='YES'){
//															 //alert (s_key);	
															 menu_str=menu_str+'<li  align="center" onClick="'+s_key+'()"  style="width:100%; background-color:#09C; " ><img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="'+s_key+'.png"></li>'
															menu_str=menu_str+'<div style="height:2px"></div>'							

														if (s_key=="chemist_visit"){
															 order_report="Yes"
															
														}
														if (s_key=="doctor_visit"){
															 doctor_report="Yes"
															
														}
														if (s_key=="prescription_report"){
															 prescription_report="Yes"
															
														}
//														
//														
													} //end yes
												} //end for
												menu_str=menu_str;
												localStorage.menu_list=menu_str;
												//alert (localStorage.menu_list)
												$('#menu_lv').empty()
												$('#menu_lv').append(localStorage.menu_list);

												
//												alert (localStorage.menu_list);
												//=============set menu end================
											//	===================CtStr, Spciality=========
												
												var dCategory=localStorage.catStr											
												catList=dCategory.split(',')
												$('#dCategoryAdd').empty();
												
												for (var j=0; j < catList.length-1; j++){
													var opt='<option value="'+catList[j]+'">'+catList[j]+'</option>'
													
													 $('#dCategoryAdd').append(opt);
												}
												
												var dSpaciality=localStorage.spcStr
												spacialityList=dSpaciality.split(',')
												
												$('#dSpacialityAdd').empty();
												for (var s=0; s < spacialityList.length-1; s++){
													var opt='<option value="'+spacialityList[s]+'">'+spacialityList[s]+'</option>'
													 $('#dSpacialityAdd').append(opt);
													
												}
											//=================================================	
												
												//===========Market===========================
												//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													var visitPlanMarketComb=''								
													var profileMarketComb='';								
													var unscheduleMarketComb='';
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')"><font class="name" style="font-size:18; font-weight:bold">'+marketNameID+'</a></font></li>';
															
															visitPlanMarketComb+='<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;height=15px" onClick="check_boxTourTrue(\''+marketID+'\')"> '+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocTour_keyup(\''+marketID+'\')" name="doc_tour'+marketID+'" value="checkbox" id="doc_tour'+marketID+'"><label for="doc_camp'+marketID+'"></br></label></td><td  style="text-align:left;">'+'</br><font id="'+ marketID +'" onClick="check_boxTourTrue(\''+marketID+'\')" class="name" >'+ marketNameID+'</font></td></tr>'+'</table>'+'</li>';
															
															profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;height:15px"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')"><font class="name" style="font-size:12; font-weight:bold; color:#306161">'+marketNameID+'</font></a></li>';
															

															}
													}
													
																				
													localStorage.visit_plan_marketlist_combo=visitPlanMarketComb;								
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb;
													localStorage.market_cmb_list_cp=profileMarketComb;							

													//alert (localStorage.unschedule_market_cmb_id)
													$('#market_combo_id_lv').empty();
													$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
													
													$('#tour_market_combo_id_lv').empty();
													$('#tour_market_combo_id_lv').append(localStorage.visit_plan_marketlist_combo);
													
													
										//==========================TourDoc=======================		
										
										//===========Market===========================
												//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													//alert (localStorage.marketStrDoc);
													if (localStorage.marketStrDoc!=''){
														var docMarketList = localStorage.marketStrDoc.split('<rd>');
														var docMarketListShowLength=docMarketList.length	
														var docMarketComb=''
														var today = new Date();
														var dd = today.getDate();
														var mm = today.getMonth()+1; //January is 0!
														var yyyy = today.getFullYear()	
														var CDate =yyyy+'-'+mm+'-'+dd	
														var todayFlag=0
														var tomorrowFlag=0		
														//alert (docMarketListShowLength)			
														for (var k=0; k < docMarketListShowLength; k++){
															var docMarketValueArray = docMarketList[k].split('<fd>');
															docMarketID=docMarketValueArray[0];
															docMarketName=docMarketValueArray[1];
															docMarketDate=docMarketValueArray[2];
															var docmarketNameID=docMarketName+'|'+docMarketID;
													
													//if ((docMarketDate!=CDate) &&(tomorrowFlag==0) && (docMarketDate.length > 5)) {
//																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;background-color:#EDFBFE"><font  style="font-size:24; font-weight:bold;color:#009">Tomorrow</font></li>';
//																tomorrowFlag=1
//															}
															if ((docMarketDate==CDate) &&(todayFlag==0)) {
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;background-color:#EDFBFE"><font  style="font-size:24; font-weight:bold;color:#009">Today</font></li>';
																todayFlag=1
															}
															if (docMarketID!=''){
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+docmarketNameID+'\')"><font class="name" style="font-size:18; font-weight:bold">'+docmarketNameID+'</a></font></li>';
																
																}
														}
														
																					
														localStorage.docMarketComb=docMarketComb;								
													}
													
													//$('#tour_market_combo_id_lv').empty();
//													$('#tour_market_combo_id_lv').append(localStorage.visit_plan_marketlist_combo);
													
										
										
										
												
												
										//===================		

									var planMarketListCteam = localStorage.marketListStrCteam.split('<rd>');
									var planMarketListShowLengthCteam=planMarketListCteam.length	
									var visitPlanMarketCombCteam=''	
									
									for (var c=0; c < planMarketListShowLengthCteam; c++){
											var planMarketValueArrayCteam = planMarketListCteam[c].split('<fd>');
											planMarketIDCteam=planMarketValueArrayCteam[0];
											planMarketNameCteam=planMarketValueArrayCteam[1];
											
											marketIDCteam=planMarketIDCteam
											marketNameCteam=planMarketNameCteam
											var marketNameIDCteam=planMarketNameCteam+'|'+planMarketIDCteam;
											
											if(planMarketIDCteam!='' && localStorage.cTeam==1){
												visitPlanMarketCombCteam+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameIDCteam+'\')"><font class="name" style="font-size:18; font-weight:bold">'+marketNameIDCteam+'</a></font></li>';

														}
													}	
													
													localStorage.visit_plan_marketlist_comboCteam=visitPlanMarketCombCteam;
													
												//==================================	
													
												
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													//alert (localStorage.productListStr)
													//------------ Order Item list								
													
													if (order_report=="Yes"){
														
localStorage.report_button=' <input type="submit" id="loginButton" onClick="s_order_summary_report();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    Sales Call and Order Count     "   /></br><input type="submit" id="loginButton" onClick="s_order_detail_report();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    Sales Call and Order Detail     "   />'


//localStorage.report_button='<a data-role="button" onClick="s_order_detail_report();" >Sales Call and Order Report</a>'
														}
														$('#order_report_button').empty();
														$('#order_report_button').append(localStorage.report_button).trigger('create');
//														
//															 
//															
//														
//									//	alert (localStorage.doctor_report_button);	
//										
													if (doctor_report=="Yes"){
														
										localStorage.doctor_report_button='<input type="submit" id="loginButton" onClick="summary_report_doctor();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    DCR Count     "   /></br><input type="submit" id="loginButton" onClick="detail_report_doctor();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    DCR Detail     "   />'

										
										//localStorage.doctor_report_button='<a data-role="button" onClick="detail_report_doctor()" >DCR Report</a>'
										
	localStorage.prescription_report_button='<input type="submit" id="loginButton" onClick="summary_report_prescription();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="   Prescription Count     "   /></br><input type="submit" id="loginButton" onClick="detail_report_prescription();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="   Prescription Detail     "   />'
										
										
													}	
													
													$('#doctor_report_button').empty();
													$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');

													
													$('#prescription_report_button').empty();
													$('#prescription_report_button').append(localStorage.				prescription_report_button).trigger('create');
													
													
													
														
										// alert (localStorage.doctor_report_button);						 
															
														
													
													
													var product_tbl_doc_campaign='';
													var product_tbl_doc_sample='';
//													
//													
//													
													var product_tbl_order=''
													//alert (productLength)
													for (j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														var product_str=productArray2[3];
														var vat=productArray2[4];
														
														
														var product_qty='';																		
														
														product_tbl_order=product_tbl_order+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_item(\''+product_id2+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"  ><td width="60px" style="text-align:center; padding-left:5px;"><input class="orderProduct" maxlength="4" onChange="getOrderData_keyup(\''+product_id2+'\')" type="number" id="order_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="order_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="order_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="order_vat'+product_id2+'" value="'+vat+'" ><input type="hidden" id="order_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ><input type="hidden" id="order_promo'+product_id2.toUpperCase()+'" value="'+product_str+'" placeholder="qty" ></td><td>&nbsp;&nbsp;</td><td  style="text-align:left; color:#306161" >'+'<font class="name" id="'+ product_id2 +'" onClick="tr_item(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font> | '+'<font class="itemCode">'+ product_id2.toUpperCase()+' | '+product_price+'</font><span id="stockShow'+product_id2.toUpperCase()+'" style="color:#600"></span></br> <span style="background-color:#FFFF53; color:#F00" id="promoShow'+product_id2.toUpperCase()+'" style="font-size:12px">'+product_str+'</span></td></tr>'+'</table>'+'</li>';
														//------------ Doctor Campaign Item list
														$("#error_login").html('Processing Product List....');
														
														
														product_tbl_doc_campaign=product_tbl_doc_campaign+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="check_boxTrue(\''+product_id2+'\')"> '+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><label for="doc_camp'+product_id2+'"></br></label><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'</br><font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" class="name" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

														$("#error_login").html('Processing Product List....');	
														//-------------Sample----------
														
														product_tbl_doc_sample=product_tbl_doc_sample+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_sample(\''+product_id2+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;"><input class="docSample" maxlength="4" onChange="getSampleData_keyup(\''+product_id2+'\')" type="number" id="sample_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="sample_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="sample_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="sample_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">&nbsp;&nbsp;<font  class="name" >'+product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

														
														
													
													}
													//product_tbl_order=product_tbl_order+'</ul>';//</table>';	
													//product_tbl_doc_campaign=product_tbl_doc_campaign+'</ul>';//+'</table>'	//+'</ul>';						
													//product_tbl_doc_sample=product_tbl_doc_sample+'</ul>';
													 
													
													localStorage.product_tbl_str=product_tbl_order	;	

													localStorage.product_tbl_str_doc_campaign=product_tbl_doc_campaign;
													localStorage.product_tbl_str_doc_sample=product_tbl_doc_sample;
													
												
										$('#item_combo_id_lv').empty()
										$('#item_combo_id_lv').append(localStorage.product_tbl_str);
										$("#item_combo_id").val('A')
										searchProduct()
										
										
										//bonusCombo()
										
										$('#campaign_combo_id_lv').empty();
										$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
										$('#sample_combo_id_lv').empty();
										$('#sample_combo_id_lv').append(localStorage.product_tbl_str_doc_sample);

													
													

													//------------ Gift Item list								
//	
													
													
										if (localStorage.gift_string.length > 5 ){
										
											var giftList=localStorage.gift_string.split('<rd>');
											var giftLength=giftList.length;

											
											var gift_tbl_doc='';
											for (j=0; j < giftLength; j++){
												var gifttArray = giftList[j].split('<fd>');
												var gift_id=gifttArray[0];	
												var gift_name=gifttArray[1];
												var gift_qty='0';
												
												
												
												
												//------------ Doctor Gift Item list
												
												gift_tbl_doc=gift_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_gift(\''+gift_id+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="gift_id'+gift_id+'" value="'+gift_id+'" ><input class="docGift" maxlength="4" onChange="getGiftData_keyup(\''+gift_id+'\')" type="number" id="gift_qty'+gift_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_gift_name'+gift_id.toUpperCase()+'" value="'+gift_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'&nbsp;&nbsp;<font id="'+ gift_name +'" onClick="tr_item_doc_campaign(\''+gift_id+'\')" class="name" >'+ gift_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
												
												
												
												
								
											}
											
											//gift_tbl_doc=gift_tbl_doc+'</ul>';//+'</table>'
										
											localStorage.gift_tbl_doc=gift_tbl_doc;
											//$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
											$('#gift_combo_id_lv').empty();
											$('#gift_combo_id_lv').append(localStorage.gift_tbl_doc);
											
										
										
										}
													
													
//													========================PPM Start========
													if (localStorage.ppm_string.length > 5 ){
													
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														

														
														var ppm_tbl_doc='';
														for (j=0; j < ppmLength; j++){
															var ppmArray = ppmList[j].split('<fd>');
															var ppm_id=ppmArray[0];	
															var ppm_name=ppmArray[1];
															var ppm_qty='0';
															
															
															
															
															//------------ Doctor ppm Item list
															
															ppm_tbl_doc=ppm_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_ppm(\''+ppm_id+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="ppm_id'+ppm_id+'" value="'+ppm_id+'" ><input class="docPpm" maxlength="4" onChange="getppmData_keyup(\''+ppm_id+'\')" type="number" id="ppm_qty'+ppm_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_ppm_name'+ppm_id.toUpperCase()+'" value="'+ppm_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'&nbsp;&nbsp;<font id="'+ ppm_name +'" onClick="tr_item_doc_campaign(\''+ppm_id+'\')" class="name">'+ ppm_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
															
															
															
															
											
														}
													
														localStorage.ppm_tbl_doc=ppm_tbl_doc;
														$('#ppm_combo_id_lv').empty();
														$('#ppm_combo_id_lv').append(localStorage.ppm_tbl_doc);
													
													} 


//													===========================ppm end===============


													localStorage.visit_page=""
													$("#se_mpo").val(localStorage.user_id);

													localStorage.synced='YES';
													
													
													
													$("#error_login").html('Synced Successfully');
													
													$("#wait_image_login").hide();
													$("#loginButton").show();
													if (localStorage.user_type=='sup'){
													 checkRequest()
													}
													checkInbox();
													$.afui.loadContent("#pageHome",true,true,'right');
													
													set_doc_all();

										  }//else failed
	
								}// success
							});	//Second Hit
		
		
						}			  
												
					}
						
					
				}

		}
     
    });			
}
		
		
		
		
}//Function
//=================Bonus Combo==========
//function bonusCombo(){
//	var promo_str=localStorage.promo_str;
//	var bonusComboList=promo_str.split('<rd>');
//	$('#bonus_combo').empty();
//	$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="0"><font style="font-size:12px; color:#306161; background-color:#ECECFF">N/A</font></option>')
//	for (j=0; j < bonusComboList.length; j++){
//		var single_promo=bonusComboList[j].split('<fd>');
//		$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="'+single_promo[2]+' ('+single_promo[0]+')'+'"><font style="font-size:12px; color:#306161; background-color:#ECECFF">'+single_promo[2]+'('+single_promo[0]+')'+'</font></option>');
//	}
//	
//}


//==================Menu function=====================
function chemist_visit() {
	
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	//$("#doc_start").html('Visit > Market > Chemist');
	
	
	$("#visit_location").show();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	
	
	localStorage.doctor_flag=0;
	localStorage.tourFlag=0;
	localStorage.doctor_plan_flag=0;
	localStorage.visit_page="NO";
	addMarketList();
	localStorage.saved_data_submit=0;
	localStorage.save_submit=0;
	//alert ('sadsafdsff')
	//bonusCombo();
	
	$("#addDocanc").hide();
	$("#blankAnc").show();
	
	$("#dPending").hide();
	$("#dBlank").show();
	
}
function saved_visit() {
	
	//$("#doc_start").html('Visit > Market > Chemist');
	localStorage.saved_data_submit=0;
	$.afui.loadContent("#page_saved_visit",true,true,'right');

	getvisitSave_data();
	
}
function chemist_profile() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	//$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Chemist</font>');
	localStorage.doctor_flag=0;
	
	
	localStorage.saved_data_submit=0;
	//addMarketListCp();
	
	
}



function doctor_visit_plan() {
	
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	//$("#doc_start").html('Visit > Market > Doctor');
	localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=1;
	
	localStorage.saved_data_submit=0;
	localStorage.visit_page="NO";
	//addMarketList();
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketListDoctor();}
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$("#dPending").show();
	$("#dBlank").hide();
	
}
function doctor_visit() {
	
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	//$("#doc_start").html('Visit > Market > Doctor');
	localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=1;
	
	localStorage.saved_data_submit=0;
	localStorage.visit_page="NO";
	//addMarketList();
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$("#dPending").show();
	$("#dBlank").hide();
	
}
function doctor_profile() {
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	//$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Doctor</font>');
	
	localStorage.saved_data_submit=0;
	localStorage.doctor_flag=1;
	localStorage.visit_page="NO";
	//addMarketListCp();
	
}

function feedback() {
	localStorage.saved_data_submit=0;
	getComplain();
	//var url = "#page_complain";	
//	$.mobile.navigate(url);
}

function tour(){
	
	localStorage.tourFlag=1;
	localStorage.saved_data_submit=0;
	localStorage.doctor_flag=0;
	localStorage.tour_doc_str=''
	//alert (localStorage.user_type)
	//if (localStorage.user_type=='rep'){
		showSubmitDocShow()
		addMarketListTour()
	
	$("#err_marketTour").html('');
}
function team(){
	
	localStorage.tourFlag=1;
	localStorage.saved_data_submit=0;
	localStorage.doctor_flag=0;
	localStorage.tour_doc_str=''

	page_pending()
	//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
}



function page_pending(){
	$("#err_pendingTour").show();
	$("#wait_image_pendingTour").show();
	//alert (localStorage.base_url+'tourPending?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	//$("#tourpendingTxt").text(localStorage.base_url+'tourPending?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	
	$.ajax(localStorage.base_url+'tourPending?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_pendingTour").hide();
								$("#err_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_pendingTour").text("Approved route not available");	
											$("#wait_image_pendingTour").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_pendingTour").hide();
											localStorage.repPending=resultArray[1];
											
											$('#tour_pending_combo_id_lv').empty()
											$('#tour_pending_combo_id_lv').append(localStorage.repPending);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			if (localStorage.user_type=='sup'){
				$("#cReqShow").html('<a onClick="repCancelReqShow_sup()" style="font-size:18px; color:#FFF; " >CancelReqPending</a> ');
			}
			else{
				$("#cReqShow").html('<a id="blankAnc" name="blankAnc" onClick="homePage()"  ></a> ');
			}
			$.afui.loadContent("#page_tour_pending",true,true,'right');	 
	
	
}

function repCancelReqShow_sup(){
	
	$("#err_cancel_pendingTour").html('');
	//alert (localStorage.base_url+'repPendingCancel?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)

	
	$.ajax(localStorage.base_url+'repPendingCancel?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_canccel_pendingTour").hide();
								$("#err_cancel_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_canccel_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_cancel_pendingTour").text("Cancel request not available");	
											$("#wait_image_canccel_pendingTour").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_canccel_pendingTour").hide();
											
										
											
											$('#tour_cancel_pending_combo_id_lv').empty()
											$('#tour_cancel_pending_combo_id_lv').append(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			$.afui.loadContent("#page_cancel_pending",true,true,'right');	 
	
	
}
function repCancelReq_sup(rep_id){

	
	$("#wait_image_tourCancelSup").show();
	$("#err_tourCancelSup").html('');
	//alert (localStorage.base_url+'repCancelReq_sup?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id)

	
	$.ajax(localStorage.base_url+'repCancelReq_sup?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancelSup").hide();
								$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancelSup").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancelSup").text("Approved route not available");	
											$("#wait_image_tourCancelSup").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											localStorage.repPendingSup=rep_id;
											
											var repIdShow=$("#sup_"+rep_id).html();
											localStorage.repshowSup=repIdShow;
											$("#wait_image_tourCancelSup").hide();
											$("#tourCancelShowRepName").html(localStorage.repshowSup);
											$('#tourCancelShowSup').html(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			$.afui.loadContent("#page_repCancelReq_sup",true,true,'right');	 
	
	
}
function tourCReq_delete(id){
	
	
	$("#wait_image_tourCancelSup").show();
	$("#err_tourCancelSup").html('');
	
	//alert (localStorage.base_url+'tourCReq_delete?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+localStorage.repPendingSup+'&rowId='+id)

	
	$.ajax(localStorage.base_url+'tourCReq_delete?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+localStorage.repPendingSup+'&rowId='+id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancelSup").hide();
								$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancelSup").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancelSup").text("Approved route not available");	
											$("#wait_image_tourCancelSup").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_tourCancelSup").hide();
											$('#tourCancelShowSup').html(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
		//	$.afui.loadContent("#page_repCancelReq_sup",true,true,'right');	 
	
	
}

function tourRepInfo(repId){
	
	
	$("#err_repInfo").show();
	$("#err_repInfo").html('');
	
	//alert (localStorage.base_url+'lastThreeVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+repId)

	
	$.ajax(localStorage.base_url+'lastThreeVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+repId,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_repInfo").hide();
								$("#err_repInfo").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_repInfo").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_repInfo").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_repInfo").text("Approved route not available");	
											$("#wait_image_repInfo").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_repInfo").hide();
											
											$('#repInfoRepName').html(resultArray[2])
											$('#repInfo').html(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			$.afui.loadContent("#page_repInfo",true,true,'right');	 
	
	
}
function repPendingDoc(rep_id){
	
	localStorage.pendingRep=rep_id
	localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").show();
	$("#err_pendingRouteTour").html('');
	
	//alert (localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id)
	

	$.ajax(localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
										
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_pendingRouteTour").html(resultArray[1]);	
											$("#wait_image_rep_pendingTour").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
										
											localStorage.repDocPending=resultArray[1];
											
											
											
											var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
											var d = new Date();
											var month = d.getMonth()+2;
											var day = d.getDate();
											var year =d.getFullYear();
											
											var monthThis=''
											
											if (month==1){monthThisShow='Jan'+'  '+year;}
											if (month==2){monthThisShow='Feb'+'  '+year;}
											if (month==3){monthThisShow='Mar'+'  '+year;}
											if (month==4){monthThisShow='Apr'+'  '+year;}
											if (month==5){monthThisShow='May'+'  '+year;}
											if (month==6){monthThisShow='Jun'+'  '+year;}
											if (month==7){monthThisShow='Jul'+'  '+year;}
											if (month==8){monthThisShow='Aug'+'  '+year;}
											if (month==9){monthThisShow='Sep'+'  '+year;}
											if (month==10){monthThisShow='Oct'+'  '+year;}
											if (month==11){monthThisShow='Nov'+'  '+year;}
											if (month==12){monthThisShow='Dec'+'  '+year;}
										
											var days = Math.round(((new Date(year, month))-(new Date(year, month-1)))/86400000);
											//alert (monthThisShow)
											var thisMonthTable='<table width="100%" border="0">  <tr>    <td>'+monthThisShow+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right">Approved</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
											
											docTThisMonthRow=localStorage.repDocPending
											//alert (docTThisMonthRow)
											for (var i=0; i < days; i++){
												var dayShow=i+1
												var fulDate=year+'-'+month+'-'+day
												
												var a = new Date(month+'/'+dayShow+'/'+year);
												var dayName=weekday[a.getDay()];
												var monthCheck=''
												var dayCheck=''
												
												if (month<10){monthCheck='0'+month}else{monthCheck=month}
												if (dayShow<10){dayCheck='0'+dayShow}else{dayCheck=dayShow}
												var dayCheckFinal=year+'-'+monthCheck+'-'+dayCheck
												
												//alert (dayCheckFinal)
												
													
												
												
												
												
												thisMonthTable=thisMonthTable+'<tr ><td >'+dayName+'</td><td>'+dayShow+'</td><td width="40%">'
												//'Bashndhara<br> Nadda<br>'
												if (docTThisMonthRow.indexOf('<'+dayCheckFinal+'>')!=-1){
													var dateRouteSingle=docTThisMonthRow.split('<'+dayCheckFinal+'>')[1].split('</'+dayCheckFinal+'>')[0]
													//if (dayShow==21){alert (dateRouteSingle)}
													var marketStrListThisMonth=dateRouteSingle.split('<rd>')
													var dayRoute=''
													for (var m=0; m < marketStrListThisMonth.length; m++){
														var marketIdThisMonth=marketStrListThisMonth[m].split('<fd>')[0]
														var marketNameThisMonth=marketStrListThisMonth[m].split('<fd>')[1]
														var marketStatusThisMonth=marketStrListThisMonth[m].split('<fd>')[2]
														
														dayRoute=dayRoute+marketNameThisMonth+'['+marketIdThisMonth+']'+'----'+marketStatusThisMonth+'<br>'
														//alert (checkId)
													}
													thisMonthTable=thisMonthTable+dayRoute+'<br>'
													//thisMonthTable=thisMonthTable+'<font id="'+i+'editinfo">'+marketNameThisMonth+'['+marketIdThisMonth+']'+'----'+marketStatusThisMonth+'</font><br>'
													var marketName
													var status
													//alert (dateRouteSingle)
												}
												
												thisMonthTable=thisMonthTable+'</td> </tr>'
												
											}
											thisMonthTable=thisMonthTable+'</table><br><br><br>'
											$('#repPendingShow').html(thisMonthTable)
											
											
											
											
											
											$("#err_rep_pendingTour").text("");	
											$("#wait_image_rep_pendingTour").hide();
											if (localStorage.user_type=='rep'){
												$("#tourButton").hide();
											}
											else{
												$("#tourButton").show();
											}
											//alert (rep_id)
											var repIdName=$("#"+rep_id).html();	
											localStorage.repIdName=repIdName
											$("#pendingRepShow").html(localStorage.repIdName);	
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			$("#wait_image_route_pendingTour").hide();
			//alert (rep_id_pending)	 
//			$("#pendingRepShow").html(rep_id_pending);	
			$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}





function reports() {
	var str_report_rep='<table width="100%" border="0">'+
					 '<tr><td>ID: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" readonly="true" placeholder="Rep">'+
					  '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>'+
					   '<tr><td>Teritory: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market"  ></td></tr></table>'
	var str_report_sup='<table width="100%" border="0">'+
					   '<tr><td>ID: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" placeholder="Rep">'+
					   '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>	'+
					   '<tr><td>Teritory: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market/level"  ></td></tr></table>'	
	
	if (localStorage.user_type=='rep'){
		localStorage.str_report=str_report_rep;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	if (localStorage.user_type=='sup'){
		localStorage.str_report=str_report_sup;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	$.afui.loadContent("#page_reports_dcr",true,true,'right');
	//var url = "#page_reports_dcr";
//	$.mobile.navigate(url);
}



//==================Menu function end=================
function addMarketList() {
	//alert (localStorage.unschedule_market_cmb_id);
	$("#market_combo_id_lv").val('');
	var unschedule_market_combo_list=localStorage.unschedule_market_cmb_id;
	//alert (unschedule_market_combo_list)
	$('#market_combo_id_lv').empty();
	$('#market_combo_id_lv').append(unschedule_market_combo_list);
	
	//$('#market_combo_id_lv').empty();
//	$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
	//alert (unschedule_market_combo_list)
	$.afui.loadContent("#page_market",true,true,'right');

}

function addMarketListDoctor() {
	//alert (localStorage.unschedule_market_cmb_id);
	$("#market_combo_id_lv").val('');
	var unschedule_market_combo_list=localStorage.docMarketComb;
	//alert (unschedule_market_combo_list)
	$('#market_combo_id_lv').empty();
	$('#market_combo_id_lv').append(unschedule_market_combo_list);
	
	//$('#market_combo_id_lv').empty();
//	$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
	//alert (unschedule_market_combo_list)
	
	$.afui.loadContent("#page_market",true,true,'right');

}

//==========================Show Submit Doctor=======================
function showSubmitDocShow(){
	//localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").show();
	//alert (localStorage.base_url+'repPendingDocShow?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	

	$.ajax(localStorage.base_url+'repPendingDocShow?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_rep_pendingTour").text("Retailer not available");	
											$("#wait_image_rep_pendingTour").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
																			
										//$('#tour_rep_pending_show_lv').empty()
										$('#schedule_show').html(resultArray[1]);
										
										uncheckAll('tourErep') 
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			//$("#wait_image_route_pendingTour").hide();	 
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}


function repCancelReqShow(i){
	$("#wait_image_tourCancel").hide();
	$("#err_tourCancel").html('')
	var editday=$("#"+i+"editday").html()
	var editdayName=$("#"+i+"editdayName").html()
	var editinfo=$("#"+i+"editinfo").html()
	//alert (editinfo)
	if (editinfo==undefined){
		editinfo=''
		}
	$("#dayNameedit").html(editdayName)
	$("#dayNumdit").html(editday)
	$("#infoEdit").html(editinfo)

	
	var marketList=(localStorage.marketTourStr).split('<rd>')
	var amndTable=''	
	for (var m=0; m < marketList.length; m++){
		
		var marketId=marketList[m].split('<fd>')[0]
		var marketName=marketList[m].split('<fd>')[1]
		var checkId=m+'_'+marketId+'_amnd'
		
		if (marketId!=''){
		amndTable=amndTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="'+checkId+'" value="checkbox" id="'+checkId+'"><label for="'+checkId+'"></br></label></td><td  style="text-align:left;"></br>'+marketName+'['+marketId+']</br></br></td></tr></table>'
		}
		else{
			amndTable=amndTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"></br></td></tr></table>'
		}
		
	}
	amndLeave='<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="amndleav" value="checkbox" id="amndleav" ><label for="amndleav"></br></label></td><td  style="text-align:left;"></br>Leave</br></br></td></tr></table>'
	$("#amndReq").html(amndTable)
	$("#amndLeave").html(amndLeave)
	$.afui.loadContent("#page_tour_cancel",true,true,'right');

}

function repCancelReqSubmit(){
	
	$("#err_tourCancel").html('')
	var dayNameedit=$("#dayNameedit").html()
	var dayNumdit=$("#dayNumdit").html()
	var d = new Date();
	var month = d.getMonth()+1;
	var year =d.getFullYear();
	var schDate=year+'-'+month+'-'+dayNameedit
	
	
	var marketList=(localStorage.marketTourStr).split('<rd>')
	var submitStr=''	
	for (var m=0; m < marketList.length; m++){
		
		var marketId=marketList[m].split('<fd>')[0]
		var marketName=marketList[m].split('<fd>')[1]
		var checkId=m+'_'+marketId+'_amnd'
		
		check = $("#"+checkId).prop("checked");
		if (check==true){
			if (submitStr==''){
				submitStr=marketId+'<fd>'+marketName
			}
			else{
				submitStr=submitStr+'<rd>'+marketId+'<fd>'+marketName
			}
		}
		
		
	}
	submitStr=schDate+'<date>'+submitStr
	checkLeave = $("#amndleav").prop("checked");


	alert (localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr)+'&checkLeave='+checkLeave)
	

	$.ajax(localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr)+'&checkLeave='+checkLeave,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancel").hide();
								$("#err_tourCancel").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_tourCancel").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancel").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancel").text("Retailer not available");	
											$("#wait_image_tourCancel").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
																			
										//$('#tour_rep_pending_show_lv').empty()
										$('#tourCancelShow').html('Submitted Successfully');
										$("#wait_image_tourCancel").hide();
										//$.afui.loadContent("#page_tour_cancel",true,true,'right');
										
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			$("#wait_image_route_pendingTour").hide();	 
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}

function tourCReq_doc(i){
	
	var reson  = $("#R_opt_"+i).val().toUpperCase();
	
	//alert (localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rowId='+i+'&reson='+reson)
	
	
	$.ajax(localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rowId='+i+'&reson='+reson,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancel").hide();
								$("#err_tourCancel").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_tourCancel").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancel").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancel").text("Retailer not available");	
											$("#wait_image_tourCancel").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
																			
										//$('#tour_rep_pending_show_lv').empty()
										$('#tourCancelShow').html(resultArray[1]);
										$("#wait_image_tourCancel").hide();
										//$.afui.loadContent("#page_tour_cancel",true,true,'right');
										
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax

	
}
//========================================================

function addMarketListTour() {
	
	$("#wait_image_retTour").hide();	
	$("#err_marketTour").html('');
	//showSubmitDocShow()

	
//	====================================================
	var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var year =d.getFullYear();
	
	var monthThis=''
	
	if (month==1){monthThisShow='Jan'+'  '+year;}
	if (month==2){monthThisShow='Feb'+'  '+year;}
	if (month==3){monthThisShow='Mar'+'  '+year;}
	if (month==4){monthThisShow='Apr'+'  '+year;}
	if (month==5){monthThisShow='May'+'  '+year;}
	if (month==6){monthThisShow='Jun'+'  '+year;}
	if (month==7){monthThisShow='Jul'+'  '+year;}
	if (month==8){monthThisShow='Aug'+'  '+year;}
	if (month==9){monthThisShow='Sep'+'  '+year;}
	if (month==10){monthThisShow='Oct'+'  '+year;}
	if (month==11){monthThisShow='Nov'+'  '+year;}
	if (month==12){monthThisShow='Dec'+'  '+year;}

	var days = Math.round(((new Date(year, month))-(new Date(year, month-1)))/86400000);
	//alert (monthThisShow)
	var thisMonthTable='<table width="100%" border="0">  <tr>    <td>'+monthThisShow+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right">Approved</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
	
	docTThisMonthRow=localStorage.docTThisMonthRow
	for (var i=0; i < days; i++){
		var dayShow=i+1
		var fulDate=year+'-'+month+'-'+day
		
		var a = new Date(month+'/'+dayShow+'/'+year);
		var dayName=weekday[a.getDay()];
		var monthCheck=''
		var dayCheck=''
		
		if (month<10){monthCheck='0'+month}else{monthCheck=month}
		if (dayShow<10){dayCheck='0'+dayShow}else{dayCheck=dayShow}
		var dayCheckFinal=year+'-'+monthCheck+'-'+dayCheck
		
		//alert (dayCheckFinal)
		
			
		
		
		
		
		thisMonthTable=thisMonthTable+'<tr ><td><font id="'+i+'editday">'+dayName+'</font></td><td><font id="'+i+'editdayName">'+dayShow+'</font></td><td width="40%">'
		//'Bashndhara<br> Nadda<br>'
		if (docTThisMonthRow.indexOf('<'+dayCheckFinal+'>')!=-1){
			var dateRouteSingle=docTThisMonthRow.split('<'+dayCheckFinal+'>')[1].split('</'+dayCheckFinal+'>')[0]
			//if (dayShow==21){alert (dateRouteSingle)}
			var marketStrListThisMonth=dateRouteSingle.split('<rd>')
			var dayRoute=''
			for (var m=0; m < marketStrListThisMonth.length; m++){
				var marketIdThisMonth=marketStrListThisMonth[m].split('<fd>')[0]
				var marketNameThisMonth=marketStrListThisMonth[m].split('<fd>')[1]
				var marketStatusThisMonth=marketStrListThisMonth[m].split('<fd>')[2]
				
				dayRoute=dayRoute+marketNameThisMonth+'['+marketIdThisMonth+']'+'----'+marketStatusThisMonth+'<br>'
				//alert (checkId)
			}
			thisMonthTable=thisMonthTable+'<font id="'+i+'editinfo">'+dayRoute+'</font><br>'
			//thisMonthTable=thisMonthTable+'<font id="'+i+'editinfo">'+marketNameThisMonth+'['+marketIdThisMonth+']'+'----'+marketStatusThisMonth+'</font><br>'
			var marketName
			var status
			//alert (dateRouteSingle)
		}
		
		thisMonthTable=thisMonthTable+'</td><td width="8%"><input type="submit" id="btn_submit_tour" onClick="repCancelReqShow('+i+');"   style="background-color:#09C; color:#FFF; font-size:11px" value="  Edit  "   /></td> </tr>'
		
	}
	thisMonthTable=thisMonthTable+'</table><br><br><br>'
	$('#thisMonth').html(thisMonthTable)
	
	
//	====================================================
	var d = new Date();
	var monthNextGet = d.getMonth()+2;
	var dayNext = d.getDate();
	var yearNext =d.getFullYear();
	
	var monthThis=''
	
	if (monthNextGet==1){monthNext='Jan'+'  '+year;}
	if (monthNextGet==2){monthNext='Feb'+'  '+year;}
	if (monthNextGet==3){monthNext='Mar'+'  '+year;}
	if (monthNextGet==4){monthNext='Apr'+'  '+year;}
	if (monthNextGet==5){monthNext='May'+'  '+year;}
	if (monthNextGet==6){monthNext='Jun'+'  '+year;}
	if (monthNextGet==7){monthNext='Jul'+'  '+year;}
	if (monthNextGet==8){monthNext='Aug'+'  '+year;}
	if (monthNextGet==9){monthNext='Sep'+'  '+year;}
	if (monthNextGet==10){monthNext='Oct'+'  '+year;}
	if (monthNextGet==11){monthNext='Nov'+'  '+year;}
	if (monthNextGet==12){monthNext='Dec'+'  '+year;}

	var daysNext = Math.round(((new Date(yearNext, monthNextGet))-(new Date(yearNext, monthNextGet-1)))/86400000);
	//alert (daysNext)
	
	
	var nextMonthTable='<table width="100%" border="0">  <tr>    <td>'+monthNext+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right">DRAFT/Approved</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
	for (var i=0; i < daysNext; i++){
		var dayShow=i+1
		var aNext = new Date(monthNextGet+'/'+dayShow+'/'+yearNext);
		//alert (aNext)
		var dayNameNext=weekday[aNext.getDay()];
		var dateNextMonth = yearNext+'-'+monthNextGet+'-'+dayShow;
		//alert (dateShow)
		nextMonthTable=nextMonthTable+'<tr ><td width="100px">'+dayNameNext+'</td><td>'+dayShow+'<input type="hidden" id="'+i+'_date" value="'+dateNextMonth+'"  /></td>'
		nextMonthTable=nextMonthTable+'<td>'
		
		var marketList=(localStorage.marketTourStr).split('<rd>')
		
		for (var m=0; m < marketList.length; m++){
			
			var marketId=marketList[m].split('<fd>')[0]
			var marketName=marketList[m].split('<fd>')[1]
			var checkId=i+'n'+m+'_'+marketId
			//alert (marketId)
			if (marketId!=''){
			nextMonthTable=nextMonthTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="'+checkId+'" value="checkbox" id="'+checkId+'"><label for="'+checkId+'"></br></label></td><td  style="text-align:left;"></br>'+marketName+'['+marketId+']</br></br></td></tr></table>'
			//alert (checkId)
			}
			else{
				nextMonthTable=nextMonthTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"></br></td></tr></table>'
			}
		}
		
		
		
	nextMonthTable=nextMonthTable+'</td></tr>'
	}
	nextMonthTable=nextMonthTable+'</table><input type="submit"  onClick="tourSubmit_doc();"   style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="     Submit      "   /><br><br><br>'
	$('#nextMonth').html(nextMonthTable)
	
	
	
	
	
	
	nextMShow()
	$.afui.loadContent("#page_tour_market",true,true,'right');
}

function addMarketListCteam() {
	$("#market_combo_id_lv").val('');
	var unschedule_market_combo_listCteam=localStorage.visit_plan_marketlist_comboCteam;
	$('#market_combo_id_lv').empty();
	//alert (unschedule_market_combo_listCteam)
	$('#market_combo_id_lv').append(unschedule_market_combo_listCteam);
	
	$.afui.loadContent("#page_market",true,true,'right');

}

function marketNextLV(lvalue) {
	$("#unschedule_market_combo_id").val(lvalue);
	
	
	//getLocationInfo();
	getLocationInfo_ready()
	if (localStorage.doctor_flag==1){
		marketNext_doc();
	}
	else{
		if (localStorage.user_type=='rep'){
			marketNext();	
		}
		else{
			
			marketNext_sup();	
		}
	}	
}

function marketNext() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			//var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			market_list=localStorage.market_client;
			
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next").text("Sorry Network not available");	
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
			}else{					
					var resultArray_0 = market_list.split('<'+market_Id+'>');	
					var resultArray_1 = resultArray_0[1].split('</'+market_Id+'>');	
					var m_client_string = resultArray_1[0];	
					//var resultArray = market_list.split('</'+market_Id+'>');			
//					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next").text("Retailer not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
						//----------------
						
						var visit_type="Unscheduled";
						var scheduled_date="";
						
						//-----------------------------------
									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
						
							if(mClientID!=''){

									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+mClientName+'| </font>'+mClientID+'</font></a></li>';
							}
						 }
					
					
					//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
		
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
					
					
					
					unscheduled_m_client_combo_ob.empty()
					unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
													
					$(".market").html(market_name);								
					$(".visit_type").html(visit_type);								
					$(".s_date").html(scheduled_date);
					
					localStorage.visit_type=visit_type
					localStorage.scheduled_date=scheduled_date
					
					//-----------------------------------
					$("#err_market_next").text("");
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
					
					//------- 
					
					
					
					
					//var url = "#page_market_ret";	
					//$.mobile.navigate(url);
					
					$.afui.loadContent("#page_market_ret",true,true,'right');
					
					
				}
			}//end else

			//============================Get market client list end===============================
		}			
}
function marketNext_sup() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
	}
	else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
				
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
				
				
				//===========================Get market client list Start============================
				
				
				//$("#err_market_next").html(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType);
				//http://127.0.0.1:8000/lscmreporting/syncmobile/getClientInfo?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=2568&client_id=R100008
				
	//			//// ajax-------
	
	$.ajax(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#btn_schedule_ret").show();
								$("#wait_image_schedule_ret").hide();
								$("#error_login").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
								
								
	//$.post(localStorage.base_url+'getMarketClientList?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,market_id:market_Id,catType:catType},
    						 
								
							//	 function(data, status){
									 if (status!='success'){
										$("#err_retailer_next").html('Network Timeout. Please check your Internet connection...');
										$("#btn_schedule_ret").show();
										$("#wait_image_schedule_ret").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_market_next").text("Retailer not available");	
											$("#wait_image_unschedule_market").hide();		
											$("#btn_unschedule_market").show();
										}
										
										
										
	
	
								else if (resultArray[0]=='SUCCESS'){
									
									localStorage.market_client=resultArray[1];
									
									//alert (resultArray[1])
									
								var	m_client_string=localStorage.market_client;
				
									var visit_type="Unscheduled";
									var scheduled_date="";
											
						//					-----------------------------------
														
								var mClientList = m_client_string.split('<rd>');
								var mClientListShowLength=mClientList.length	
									
								
								var unscheduled_m_client_list=''
								//alert (mClientListShowLength);
								for (var i=0; i < mClientListShowLength; i++){
										var mClientValueArray = mClientList[i].split('<fd>');
										var mClientID=mClientValueArray[0];
										var mClientName=mClientValueArray[1];
										var mClientCat=mClientValueArray[2];
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+mClientName+'| </font>'+mClientID+'</font></a></li>'	
										//unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
								
								



							
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
								
								unscheduled_m_client_combo_ob.empty()
								unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
//								--------------------------


								$(".market").html(market_name);								
								$(".visit_type").html(visit_type);								
								$(".s_date").html(scheduled_date);
								
								localStorage.visit_type=visit_type
								localStorage.scheduled_date=scheduled_date
								
								//-----------------------------------
								$("#err_market_next").text("");
								$("#wait_image_unschedule_market").hide();		
								$("#btn_unschedule_market").show();
								
								//------- 

								$.afui.loadContent("#page_market_ret",true,true,'right');
								unscheduled_m_client_combo_ob.listview("refresh");									
								} //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			

					

//			//============================Get market client list end===============================

		}	//Market required else		
}

//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);
	//getLocationInfo();
	if(localStorage.doctor_flag==1){
		marketRetailerNext_doc();	
	}
	else{
		marketRetailerNext();	
	}
		
	}
	
function marketRetailerNext() {
	
	//$("#lat").val(0);
	//$("#longitude").val(0);
	//localStorage.location_detail=''
	$("#err_m_retailer_next").text("");
	var visit_client=$("#unscheduled_m_client_combo_id").val();		
	//alert(visit_client); 	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
		}else{
			//$("#btn_unschedule_market_ret").hide();
//			$("#wait_image_unschedule_market_ret").show();		
			visitClientId_list=visit_client.split('|')
			var visitClientId=visit_client.replace(visitClientId_list[0]+"|","");
			
			var visitClientID=visit_client.split('|')[1];
			
			
			
			if (localStorage.visit_client !=visitClientID ){
				cancel_cart();
			}
			else {
				$("#wait_image_visit_submit").hide();
				$.afui.loadContent("#page_visit",true,true,'right');
			}
			//alert (visitClientID);
			$(".visit_client").html(visit_client);
				
			localStorage.visit_client_show=visit_client
			localStorage.visit_client=visit_client.split('|')[1]
			
			localStorage.visit_page="YES"
			//--------
			$("#err_m_retailer_next").text("");
			$("#wait_image_unschedule_market_ret").hide();		
			$("#btn_unschedule_market_ret").show();
			
			var lat_show= $("#lat").val();
			 //alert (localStorage.latitude)
			 //alert (localStorage.visit_location_flag)
			
			if  ((localStorage.latitud==0) && (localStorage.visit_location_flag=='YES')){
				//alert (localStorage.visit_location);
				$("#visit_location").show();
				$("#visit_submit").hide();
				
			}
			
			
			
			if (localStorage.visit_location_flag!='YES'){
				//alert (localStorage.visit_location);
				$("#visit_location").hide();
				$("#visit_submit").show();
				
			}
			
			
			if (localStorage.delivery_date_flag=='YES'){
				$("#delivery_date_div").show();
			}
			else{
				$("#delivery_date_div").hide();
			}
			if (localStorage.collection_date_flag=='YES'){
				$("#collection_date_div").show();
			}
			else{
				$("#collection_date_div").hide();
			}
			if (localStorage.payment_date_flag=='YES'){
				$("#payment_date_div").show();
			}
			else{
				$("#payment_date_div").hide();
			}
			//alert (localStorage.payment_mode_flag)
			if (localStorage.payment_mode_flag=='YES'){
				localStorage.payment_mode='Cash'
				$("#payment_mode_div").show();
			}
			else{
				$("#payment_mode_div").hide();
			}
			
			
			
			$("#errorChkVSubmit").html('');
			$("#errorConfiProfileUpdate").html('');
			$("#errorChkVSubmit_doc").html('');
			
			//$("#wait_image_visit_submit").hide();
			//$.afui.loadContent("#page_visit",true,true,'right');

			
								
			
		}
}


//--------------------------------- Order: Show order from home

function getOrder_load(){
	//bonusCombo();	
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
	
	var orderTotal=0
	for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];	
			$("#order_qty"+orderProductId).val(orderProductQty);
			var product_price=$("#order_price"+orderProductId).val(); 
			var tPrice= parseFloat(product_price)* parseFloat(orderProductQty);
			orderTotal=orderTotal+tPrice
		}		
	}
	localStorage.orderTotal=orderTotal.toFixed(2)
	
	
	
	
	$("#orderTotalShow").html(localStorage.orderTotal+' TK');
	
}
function getOrder(){	
	$("#order_load").show();
	//alert (localStorage.product_tbl_str)
	//$('#item_combo_id_lv').empty()
	//$('#item_combo_id_lv').append(localStorage.product_tbl_str);
	
	getOrderData()
	$("#err_order_item").html('')
	//$.afui.loadContent("#page_order",true,true,'right');
}

//--------------------------------- Order: Set Order data

function getOrderData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#order_qty"+product_id).val().replace('.','').substring(0,4);
	$("#order_qty"+product_id).val(pqty);
	
	
	var price= $("#order_price"+orderProductId).val()
	var Productprice=price*pqty
	
	
	//var orderT=localStorage.orderTotal
	
	
	
	var productOrderStr=localStorage.productOrderStr
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
				
				
				
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
				
			}	
			
		}
		else{
			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
							
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
							
						}
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					}
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productOrderStr=productOrderStr
	}
		
	//	------------------------------------------------------
	localStorage.orderTotal=0
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
		var orderTotal=0
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];	
			
			var product_price=$("#order_price"+orderProductId).val(); 
			var tPrice= parseFloat(product_price)* parseFloat(orderProductQty);
			orderTotal=orderTotal+tPrice
		}		
	}
	localStorage.orderTotal=orderTotal.toFixed(2)
		
		$("#orderTotalShow").html(localStorage.orderTotal+ ' TK');

		
	}
function getOrderData(){	
	
	//alert (localStorage.productOrderStr);
	if (localStorage.productOrderStr!=''){
		cart_data();
		//alert ('aa');
		$("#err_order_item").html('');
		$.afui.loadContent("#page_cart",true,true,'right');
		$("#order_load").hide();
	}
	else{
		
		$("#err_order_item").html('Please select minimum one product');
		$("#errorChkVSubmit").html('');
		//$("#errorConfiProfileUpdate").html('');
		$("#errorChkVSubmit_doc").html('');
		

		//alert (localStorage.product_tbl_str)
		//location.reload()
		getOrder_load()
		$.afui.loadContent("#page_order",false,true,'right');
		$("#order_load").hide();
		//alert ('aaa');
	}
}
	
//--------------------cart Start----------------
function cart_data() {	
	//alert (localStorage.productOrderStr)
	if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		var product_tbl_cart_str='';
		var total_value=0
		var total_without_promo=0
		var total_tp=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				var product_name=$("#order_name"+orderProductId).val(); 
				var product_price=$("#order_price"+orderProductId).val(); 
				var product_vat=$("#order_vat"+orderProductId).val(); 
				var totalPrice= parseFloat(product_price)* parseFloat(orderProductQty);
				var total= (parseFloat(product_price)-parseFloat(product_vat))* parseFloat(orderProductQty);
				
				var promo_str_cart=$('#order_promo'+orderProductId).val();
				var stock_str_cart=$('#stockShow'+orderProductId).text(); 
				
				var prom_flag=1
				//alert (promo_str_cart.length)
				
				
				if (promo_str_cart.length < 5){
					total_without_promo=total_without_promo+total
					prom_flag=0
				}
				//alert (parseFloat(total_without_promo))
				total_value=total_value+totalPrice;
				total_tp=total_tp+total
				//product_tbl_cart_str=product'_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'</li>'
				//alert (product_name)
				product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_item_cart(\''+orderProductId+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input  type="number" id="cart_qty'+orderProductId+'"  onBlur="getCartData_keyup(\''+orderProductId+'\')" value="'+orderProductQty+'" placeholder="0"> </td><td>&nbsp;</td><td  style="text-align:left;">'+ product_name.toUpperCase()+' | '+orderProductId+' | '+product_price+' '+'<span style="color:#600">'+stock_str_cart+'</span>'+'</br> <span style="background-color:#FFFF53; color:#F00;font-size:12px">'+promo_str_cart+'</span>'+'<input  type="hidden" id="cart_vat'+orderProductId+'"  value="'+prom_flag+'" >'+'</td></tr>'+'</table>'+'</li>'
				
				}
		
		}
		
		product_tbl_cart_str=product_tbl_cart_str;		
		
		
		localStorage.product_tbl_cart=product_tbl_cart_str;//+'</table>';
		localStorage.total_value=total_value.toFixed(2);
		localStorage.total_tp=total_tp.toFixed(2);
		
		$('#item_combo_id_lv_cart').empty();
		$('#item_combo_id_lv_cart').append(localStorage.product_tbl_cart);
		
		
		//var total_without_promo_vat=(17.39/100)*(parseFloat(total_without_promo))
		var total_without_promo_vat=total_without_promo
		var total_without_promo_show=total_without_promo
		
		//var total_without_promo_show=parseFloat(total_without_promo)-parseFloat(total_without_promo_vat)
		
		
		var show_total="Total Order Amount CPP: "+localStorage.total_value + " TK <font style='font-size:11px'>TP:"+localStorage.total_tp+" TK" +"</font></br> <font style='font-size:11px'> Regular Discount Applicable on TP : "+total_without_promo_show.toFixed(2) + " TK </font>" 
		localStorage.show_total=show_total;
		
		
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
	}
	else{
		
		$.afui.loadContent("#page_order",true,true,'right');

	}
	
	
	
	
}


//==============================================
function getCartData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#cart_qty"+product_id).val().replace('.','').substring(0,4);
	$("#cart_qty"+product_id).val(pqty);
	
	
	$("#order_qty"+product_id).val(pqty);
	var productOrderStr=localStorage.productOrderStr
	
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
				var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
				//	alert (productOrderStr.indexOf(product_id));
					//alert (orderProductList[j]);
					if (orderProductId==pid){
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							if(productOrderStr.indexOf('<rd>')>0){
								productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							}
							else{
								productOrderStr=productOrderStr.replace(orderProductList[j], "")
							 }
								//alert (productOrderStr);
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					} //if (orderProductLength>1){
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					} //if (orderProductLength==1
				
				} //if (orderProductId==pid)
					
					
					
				}//if(orderProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productOrderStr=productOrderStr
		
		//================price===========
		//cart_data()
		if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		var total_value=0
		var tp_total=0
		var total_tp_all=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				
				var product_price=$("#order_price"+orderProductId).val(); 
				var vat_flag=$("#cart_vat"+orderProductId).val();
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;
				var vat=$("#order_vat"+orderProductId).val(); 
				var tp=(parseFloat(product_price)-parseFloat(vat))*orderProductQty
				total_tp_all=total_tp_all+tp
				//alert (total_value)
				if (vat_flag==0){
					tp_total=tp_total+tp
				}
				
				
				}
		
		}
		
		
		
		var show_total="Total Order Amount CPP: "+total_value.toFixed(2) + " TK <font style='font-size:11px'>TP: "+total_tp_all.toFixed(2) +"</font></br> <font style='font-size:11px'> Regular Discount Applicable on TP: "+tp_total.toFixed(2) + " TK </font>" 
		
		
		//localStorage.total_value=show_total//total_value.toFixed(2);
		
		localStorage.show_total=show_total;
		
		//alert (show_total)
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
		//$("#product_total_cart").html("Total Order Amount: "+localStorage.total_value + " TK");
		//$("#product_total_last").html("Total Order Amount: "+localStorage.total_value + " TK");

	}
		
		
//		==================================
	}



function payment_mode(){
	var payment_mode='CASH'
	payment_mode=($("input:radio[name='payment_mode']:checked").val())
	$("#wait_image_visit_submit").hide();
	//$.afui.loadContent("#page_visit",true,true,'right');
	localStorage.payment_mode=payment_mode
	//alert (localStorage.payment_mode)
}
function cart_ok(){
	
	$("#wait_image_visit_submit").hide();
	$.afui.loadContent("#page_visit",true,true,'right');
	//localStorage.payment_mode=payment_mode
	//alert (localStorage.payment_mode)
}
function cancel_cart() {
	$(".orderProduct").val('');
	
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	$("#order_total_show").html('');
	$("#chemist_feedback").val('');
	
	$("#item_combo_id").val('');
	
	
	
	localStorage.productOrderStr='';
	$("#product_list_tbl_cart").html("");
	$("#wait_image_visit_submit").hide();
	$.afui.loadContent("#page_visit",true,true,'right');

}

//-----VISIT SUBMIT
function visitSubmit(){	
//alert (localStorage.doctor_flag)
	if (localStorage.doctor_flag==1){
		visitSubmit_doc();
	}
	else{
		
		lscVisitSubmit();	
	}	

}

//==============================Visit Submit============
function replace_special_char(string_value){
	//var chemist_feedback=$("#chemist_feedback").val();
	//var doc_feedback=$("#doc_feedback").val();
	//chemist_feedback=chemist_feedback.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	var real_value=string_value.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	return real_value;
}

function lscVisitSubmit(){	
	$("#errorChkVSubmit").text("");
	$("#visit_save_div").hide();
	
	//alert (localStorage.location_detail)
	var visitClientId=localStorage.visit_client
	var visit_type=localStorage.visit_type
	var scheduled_date=localStorage.scheduled_date
	
	var marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	var productOrderStr=localStorage.productOrderStr
	var marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	var campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	//alert ('asdfsdf')
	//----------------------- marchandizing status check
	marchandizingInfoStr=''
	
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);
	
	var delivery_date=$("#delivery_date").val();
	var collection_date=$("#collection_date").val();
	
	//var bonus_combo=$("#bonus_combo").val();
	var bonus_combo=($("input:radio[name='bonus_combo']:checked").val())
	//alert (bonus_combo)

	//localStorage.payment_mode=$("#payment_mode").val();
	
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	localStorage.payment_mode=payment_mode
	
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	}
	
	
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate();if(day_1.length==1)	{day_1="0" +day_1};
	var month_1 = currentDate_1.getMonth() + 1;if(month_1.length==1)	{month_1="0" +month_1};
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "-" + month_1 + "-" + day_1
	
	
	if (localStorage.delivery_date_flag!='YES'){
		delivery_date=today_1;
	}
	//else{
//		$("#errorChkVSubmit").html('Please enter delivery date');
//		$("#visit_save_div").show();
//	}
	if (localStorage.collection_date_flag!='YES'){
		collection_date=today_1
	}
	//else{
//		$("#errorChkVSubmit").html('Please enter collection date');
//		$("#visit_save_div").show();
//	}
	
	if  (localStorage.sync_date!=today_1){
		$("#errorChkVSubmit").html('Please sync first');
		$("#visit_save_div").show()
		}
		else{
				//alert (delivery_date)
				if  ((delivery_date.length < 8) || (collection_date.length < 8)){
					$("#errorChkVSubmit").html('Please enter collection and delivery date');
					$("#visit_save_div").show()
				}
				else{
					
					var currentDate = new Date()
					var day = currentDate.getDate();if(day.length==1)	{day="0" +month};
					var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
					var year = currentDate.getFullYear()
					var today=  year + "/" + month + "/" + day
					var delivery_date_check=delivery_date.replace('-','/')
					var collection_date_check=collection_date.replace('-','/')
					var delivery_year=delivery_date.split('-')[0]
					var collection_year=collection_date.split('-')[0]
			
					var date1 = new Date(today);
					var date2 = new Date(delivery_date_check);
					var date3 = new Date(collection_date_check);
			 
					var diffDays_delivery = date2- date1; 
					var diffDays_collection = date3 - date1; 
					var d_chacke=86400000*7
					//alert (d_chacke)
					if  ((diffDays_delivery < 0 ) || (diffDays_delivery > d_chacke ) || (diffDays_collection < 0 )){
						//alert (diffDays_delivery )
						$("#errorChkVSubmit").html('Invalid collection and delivery date');
						$("#visit_save_div").show();
					}
					
					else{
								//alert (photoRequired)	
			//					if (photoRequired=='Yes' && lscPhoto==''){
			//						$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
			//					}else{
			//						var imageName=localStorage.user_id+'_'+now+'.jpg';						
									if (visitClientId=='' || visitClientId==undefined){
										
										$("#errorChkVSubmit").html('Invalid Client');		
									}else{
										if(visit_type=='' || visit_type==undefined){
											$("#errorChkVSubmit").html('Invalid Visit Type');
										}else{
											//alert (localStorage.location_error)
											if ( localStorage.location_error==2){
													
													$("#checkLocation").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
													$("#visit_submit").show();
													$("#visit_save_div").show();
												}
												else {
														$("#visit_submit").hide();
														$("#wait_image_visit_submit").show();	
														$("#visit_save_div").hide();
														if (bonus_combo=='YES'){bonus_combo=1;}	else{bonus_combo=0;}
														var imageName=localStorage.user_id+'_'+now+'.jpg';
																		//alert (localStorage.productOrderStr);
																		$("#errorChkVSubmitTxt").val(localStorage.base_url+'visitSubmit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&location_detail='+localStorage.location_detail+'&bonus_combo='+bonus_combo+'&version=p1')
																		// ajax-------
																		//alert (localStorage.payment_mode);
														$.ajax(localStorage.base_url+'visitSubmit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&location_detail='+localStorage.location_detail+'&bonus_combo='+bonus_combo+'&version=p1',{
														// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
														type: 'POST',
														timeout: 30000,
														error: function(xhr) {
														//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
														$("#wait_image_visit_submit").hide();
														$("#visit_submit").show();
														$("#visit_save_div").show();
														$("#errorChkVSubmit").html('Network Timeout. Please check your Internet connection..');
																			},
														success:function(data, status,xhr){	
														
																	
															 
															 if (status!='success'){
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();
																$("#visit_save_div").show();
																$("#errorChkVSubmit").html('Network Timeout. Please check your Internet connection...');
															 }
															 else{		
															
															 var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');					
								
															if (resultArray[0]=='FAILED'){						
																$("#errorChkVSubmit").html(resultArray[1]);
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();
																$("#visit_save_div").show();	
															}else if (resultArray[0]=='SUCCESS'){
																							
														//		-----------
																localStorage.visit_client=''
																localStorage.marchandizingStr=''
																
																localStorage.marketInfoLSCStr=''
																
																localStorage.marketInfoStr='';
																localStorage.marketInfoSubmitStr='';
																
																localStorage.productOrderStr='';
																localStorage.marchandizingInfoStr='';
																localStorage.visit_camp_list_str='';
																localStorage.visit_camp_submit_str='';
																visitCampaginTempArray=[];
																visitCampaginArray=[];
																
																localStorage.visit_page="";																
																localStorage.show_total="";
																
																$("#chemist_feedback").val('')
																
																
						
																//-------------
																// Clear localStorage
																	
																localStorage.productOrderStr='';
																cancel_cart();
																//bonusCombo();	
						
																//--------------------------------------------------------
																$(".visit_client").html('');
																
																$("#errorChkVSubmit").html('');
																$("#lat").val('');
																$("#longitude").val('');
																$("#lscPhoto").val('');
																document.getElementById('myImage').src = '';
																
																$("#lat_p").val('');
																$("#long_p").val('');								
																
																$("#checkLocation").html('');
																//$("#checkLocationProfileUpdate").html('');
																
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();
																
																$("#product_total_last").html('');
																$("#product_list_tbl_cart").html('');
																$("#product_total_cart").html('');
																$("#item_combo_id").val('Search');
																
																
																
																//--
																$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
																
																
																//saved data remove
																
																if (localStorage.saved_data_submit==1){
																	var visit_save=localStorage.visit_save
																	var saved_data_show=localStorage.saved_data_show;
																	var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")
								
																	localStorage.visit_save=visit_save_data
																	//after_save_data();
																	
																}
																
																
																$("#visit_location").show();	
																$("#visit_submit").hide();
																$("#checkLocation").hide('');	
																
																$("#delivery_date").val('');
																$("#collection_date").val('');
																
								
								
																$("#checkLocation_doc").html('');
																$("#wait_image_visit_submit_doc").hide('');
																
																$("#visit_save_div").show();
																
			 												 $.afui.loadContent("#page_confirm_visit_success",true,true,'right');			
																										
															}
															else{						
																$("#errorChkVSubmit").html('Network Timeout. Please check your Internet connection.');
																$("#visit_save_div").show();
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();								
																}
						
																  }
																  
													}//success
											});//end post	
												 
											 
								}//Locatio internet else
							}//if 
			
						}
					}//end collection and delivery date future
				
				}//end collection and delivery date check
		}//sync date check
}

//==============================End Visit Submit========



//============================Doct Start===========================

function marketNext_doc() {
	
	localStorage.location_detail=''
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	localStorage.visit_market_show=market_name
	//alert (localStorage.visit_market_show)
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			var visit_type="Unscheduled";
			var scheduled_date="";
			
			result=localStorage.market_doctor
			
			var resultArray = result.split('</'+market_Id+'>');
			var doc_result_list=resultArray[0].split('<'+market_Id+'>')
			var doc_result=doc_result_list[1]
			
			
			//alert (doc_result);
			if (result==''){
				$("#err_market_next").text("Sorry Network not available");	
				$("#wait_image_unschedule_market").hide();		
				$("#btn_unschedule_market").show();
				$.afui.loadContent("#page_market_ret",true,true,'right');
				unscheduled_m_client_combo_ob.listview("refresh");
			}else{					

				//-----------------------------------
					if ((doc_result== undefined) || (doc_result== 'undefined')){
						$("#err_market_next").text("Doctor not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						$.afui.loadContent("#page_market_ret",true,true,'right');
						unscheduled_m_client_combo_ob.listview("refresh");
						
					}
					else{
					
						
						var mClientList = doc_result.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							//alert (mClientID)
							if(mClientID!=''){
	
								unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+mClientName+'|'+mClientID+'</font></a></li>';
								}								
						}
									
									
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
									
						$(".market").html(market_name);								
						$(".visit_type").html(visit_type);								
						$(".s_date").html(scheduled_date);
						localStorage.visit_type=visit_type
						localStorage.scheduled_date=scheduled_date
									
									//-----------------------------------
									$("#err_market_next").text("");
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
									
									//------- 
								
									$.afui.loadContent("#page_market_ret",true,true,'right');
									unscheduled_m_client_combo_ob.listview("refresh");
									
								}
					
					}
 		
			
		}			
}





//==============================Doctor==========

function marketRetailerNext_doc() {
	localStorage.saveSubmitDocFlag=0;
	localStorage.saveSubmitDocI=''
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		
	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
			
	}else{
		$("#btn_unschedule_market_ret").hide();
		$("#unscheduled_m_client_combo_id_lv").hide();
		
		//alert ('nn');
		$("#wait_image_ret").show();		
		
		$(".visit_client").html(visit_client);
		
		localStorage.visit_client_show=visit_client
		if (visit_client!=localStorage.visit_client){
			
			localStorage.productGiftStr=''
			localStorage.campaign_doc_str=''
			localStorage.productSampleStr=''
			
			localStorage.productppmStr='';
			
			localStorage.campaign_show_1='';
			localStorage.gift_show_1='';
			localStorage.sample_show_1='';
			localStorage.ppm_show_1='';
			
			//alert (localStorage.productGiftStr='');
//			alert (localStorage.gift_show_1);
//			==========================

		
		
		set_doc_all();
		

//			===============================
		}
		
			
		localStorage.visit_client=visit_client

		localStorage.visit_page="YES"
		
		//--------
		$("#wait_image_unschedule_market_ret").hide();		
		
		$("#unscheduled_m_client_combo_id_lv").show();
		$("#wait_image_ret").hide();
		
		$("#errorChkVSubmit").html('');
		$("#errorConfiProfileUpdate").html('');
		$("#errorChkVSubmit_doc").html('');
		
		$("#wait_image_visit_submit_doc").hide();
		
		if (localStorage.doctor_plan_flag==1){
			$("#visit_submit_save_doc").show();		
			
		}
		else{
			$("#visit_submit_save_doc").hide();		
		}
		
		$.afui.loadContent("#page_visit_doc",true,true,'right');
		//location.reload();
							
			
	
	}
}




//================Campaign=============

function getCampaign(){
	localStorage.campaign=1;

	if ((localStorage.campaign_doc_str==undefined) || (localStorage.campaign_doc_str=='undefined')){
		localStorage.campaign_doc_str='';
	}
	
	var campaign_show=localStorage.campaign_doc_str;
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	$('#campaign_combo_id_lv').empty();
	$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
	
	for (var j=0; j < campaign_showListLength; j++){	
		var camp_combo="#doc_camp"+campaign_showList[j]
		$(camp_combo).attr('checked', true);
	}
	$("#campaign_combo_id").val('A');
	searchCampaign()
	$.afui.loadContent("#page_doctor_campaign",true,true,'right');
	
}



//--------------------Campaign Item Search Start----------------
function search_item_doctor_campaign() {	
	var p_name=$("#item_search_doctor_campaign").val();

	 
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (var j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#doc_camp"+product_id).focus().select();
			$("#item_search_doctor_campaign").val('');
			return;
		}
				
	}
	
}


//--------------------Campaign Item Search End----------------
//--------------------------------- Order: Set Order data
function getDocCampaignData_keyup(product_id){
	var pid=$("#doc_camp_id"+product_id).val();
	var pname=$("#doc_camp_name"+product_id).val();
	var camp_combo="#doc_camp"+product_id
	
	var camp_combo_val=$(camp_combo).is(":checked")
	
	
	var campaign_doc_str=localStorage.campaign_doc_str
	var campaign_docShowStr='';
	
	
	if (camp_combo_val == true ){
		if (campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pid
				productOrderShowStr=pname
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pid
			}	
		}
		else{
			var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
			var campaign_doc_strListLength=campaign_doc_strList.length;
			for (var j=0; j < orderProductLength; j++){
					var campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						
						
						if (campaign_doc_str==''){
							campaign_doc_str=pid
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+campaign_docProductId
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+orderProductQty+')'
							}		
					}
			}
		}
		localStorage.campaign_doc_str=campaign_doc_str;
		
		
	}
	else{
		//alert ('3')
		var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
		var campaign_doc_strListLength=campaign_doc_strList.length;
		
		for (var j=0; j < campaign_doc_strListLength; j++){
		var campaign_docProductId=campaign_doc_strList[j]
				
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				if (campaign_docProductId==pid){
					if (campaign_doc_strListLength>1){
						if (product_index==0){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
					
					
					
				
			}
		}
	
		localStorage.campaign_doc_str=campaign_doc_str;
		
	}
		
	}
function campaign_remove(id){
	var campaign_show=localStorage.campaign_doc_str;
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	

	for (var j=0; j < campaign_showListLength; j++){

		if (j==0){
			campaign_show=campaign_show.replace(id,"");
		}
		else{
			campaign_show=campaign_show.replace("<rd>"+id,"");
		}


	}
	localStorage.campaign_doc_str=campaign_show;
	$('#'+id).remove();
	
	var camp_combo="#doc_camp"+id
	$(camp_combo).attr("checked", false);
	
	if  (campaign_show_1.indexOf('undefined')==-1 ){
		var campaign= ($("#doc_campaign").html());
		localStorage.campaign_show_1=campaign;
	}
	
	//getDocCampaignData();
}	
	
	
function getDocCampaignData(){	
	var campaign_show=localStorage.campaign_doc_str;
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	var campaign_show_1='';
	
	for (var j=0; j < campaign_showListLength; j++){
		
			if (j==0){
				campaign_show_1=campaign_show_1+'<table width="100%" cellspacing="2" border="0" style="border:thin;  border-color:a;background-color:#F7F7F7">';
			}
			var pname=$("#doc_camp_name"+campaign_showList[j]).val();
			//alert (campaign_showList[j]);
			if (campaign_showList[j] != ''){
				campaign_show_1=campaign_show_1+' <tr height="30px" style="font-size:14px;background-color:#FBFDFF"  id="'+campaign_showList[j]+'"><td>'+pname+'('+campaign_showList[j]+')'+' </td><td align=" center" style = "background-color:#E9F0FE; color:#009191;" 	 onClick="campaign_remove(\''+campaign_showList[j]+'\');">  X  </td></tr>'
			}
	}
	if (campaign_show_1!=''){
		campaign_show_1=campaign_show_1+'</table>';
	}
	localStorage.campaign_show_1=campaign_show_1;
	if  (campaign_show_1.length > 0 ){
		$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+'</br>');
	}
	
	campaign_as_sample();
		
	//$.afui.loadContent("#page_visit_doc",true,true,'right');
			
	}
//Set campaign as sample 
function campaign_as_sample(){
	var campaign_show= localStorage.campaign_doc_str+'<rd>';
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	

	var productSampleStr=localStorage.productSampleStr;
	var sample_show_1=localStorage.sample_show_1
	var productSampleStr=localStorage.productSampleStr

	for (var j=0; j < campaign_showListLength ; j++){
		if (campaign_showList[j].length !=0){
				if (productSampleStr.indexOf(campaign_showList[j])==-1){
					$("#sample_qty"+campaign_showList[j]).val(0);
					productSampleStr=productSampleStr+'<rd>'+campaign_showList[j]+'<fd>0'
				
					
				}
		}
		
	}

	localStorage.productSampleStr=productSampleStr;
	getDocSampleData();
	
	
				
		
	
	
}
function check_boxTrue(product_id){	
	//alert (product_id);
	var camp_combo="#doc_camp"+product_id
	var camp_combo_val=$(camp_combo).is(":checked")
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		getDocCampaignData_keyup(product_id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocCampaignData_keyup(product_id)
	}
	}
	
function check_boxTourTrue(docID){	
	var camp_combo="#doc_tour"+docID
	var camp_combo_val=$(camp_combo).is(":checked")
	
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		
		getDocTour_keyup(docID)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocTour_keyup(docID)
	}
	}	
	
function check_boxTourRouteTrue(id){	
	var camp_combo="#route_tour"+id
	//alert (camp_combo)
	var camp_combo_val=$(camp_combo).is(":checked")
	
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		
		getRouteTour_keyup(id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getRouteTour_keyup(id)
	}
	}	
function getRouteTour_keyup(id){
	var doc_combo="#route_tour"+id
	var camp_combo_val=$(doc_combo).is(":checked")
	var tour_doc_str=localStorage.tour_route_str
	//alert (localStorage.tour_route_str)
	if (camp_combo_val == true ){
		if (tour_doc_str.indexOf(id)==-1){
			if (tour_doc_str==''){
				tour_doc_str=id				
			}else{
				tour_doc_str=tour_doc_str+'<rd>'+id
			}	
		}
		else{
			var tour_doc_strList=localStorage.tour_route_str.split('<rd>');
			var tour_doc_strtLength=tour_doc_strList.length;
			for (var j=0; j < tour_doc_strtLength; j++){
					var campaign_docId=tour_doc_strList[j];

					if (campaign_docId==id){
						tour_doc_str=tour_doc_str.replace(campaign_docId, "")
						
						
						if (tour_doc_str==''){
							tour_doc_str=id
						
						}else{
							tour_doc_str=tour_doc_str+'<rd>'+id
						
							}		
					}
			}
		}
		localStorage.tour_route_str=tour_doc_str;
		
		
	}
	else{
		var tour_doc_strList=localStorage.tour_route_str.split('<rd>');
		var tour_doc_strLength=tour_doc_strList.length;
		
		for (var j=0; j < tour_doc_strLength; j++){
		var campaign_docId=tour_doc_strList[j]
				
				doc_index=tour_doc_str.indexOf(campaign_docId)
				if (campaign_docId==id){
					if (tour_doc_strLength>1){
						if (doc_index==0){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j]+'<rd>', "")
						}
						if (doc_index > 0){
							tour_doc_str=tour_doc_str.replace('<rd>'+tour_doc_strList[j], "")
						}
					}
					if (tour_doc_strLength==1){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j], "")
						
					}

			}
		}
	
		localStorage.tour_route_str=tour_doc_str;
		
	}
		//alert (localStorage.tour_route_str)
	}	
		
function getDocTour_keyup(docID){
	var doc_combo="#doc_tour"+docID
	var camp_combo_val=$(doc_combo).is(":checked")
	var tour_doc_str=localStorage.tour_doc_str
	//alert (camp_combo_val)
	if (camp_combo_val == true ){
		if (tour_doc_str.indexOf(docID)==-1){
			if (tour_doc_str==''){
				tour_doc_str=docID				
			}else{
				tour_doc_str=tour_doc_str+'<rd>'+docID
			}	
		}
		else{
			var tour_doc_strList=localStorage.tour_doc_str.split('<rd>');
			var tour_doc_strtLength=tour_doc_strList.length;
			for (var j=0; j < tour_doc_strtLength; j++){
					var campaign_docId=tour_doc_strList[j];

					if (campaign_docId==docID){
						tour_doc_str=tour_doc_str.replace(campaign_docId, "")
						
						
						if (tour_doc_str==''){
							tour_doc_str=docID
						
						}else{
							tour_doc_str=tour_doc_str+'<rd>'+docID
						
							}		
					}
			}
		}
		localStorage.tour_doc_str=tour_doc_str;
		
		
	}
	else{
		var tour_doc_strList=localStorage.tour_doc_str.split('<rd>');
		var tour_doc_strLength=tour_doc_strList.length;
		
		for (var j=0; j < tour_doc_strLength; j++){
		var campaign_docId=tour_doc_strList[j]
				doc_index=tour_doc_str.indexOf(campaign_docId)
				//alert (doc_index)
				if (campaign_docId==docID){
					//alert (tour_doc_strLength)
					if (tour_doc_strLength>1){
						//alert (doc_index)
						if (doc_index==0){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							tour_doc_str=tour_doc_str.replace('<rd>'+tour_doc_strList[j], "")
						}
					}
					if (tour_doc_strLength==1){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j], "")
						
					}

			}
		}
	
		localStorage.tour_doc_str=tour_doc_str;
		
	}
		//alert (localStorage.tour_doc_str)
	}	
	


function tourSubmit_doc(){	
$("#wait_image_retTour").show();	
$("#err_marketTour").html('');
	var d = new Date();
	var monthNextGet = d.getMonth()+2;
	var dayNext = d.getDate();
	var yearNext =d.getFullYear();
	var daysNext = Math.round(((new Date(yearNext, monthNextGet))-(new Date(yearNext, monthNextGet-1)))/86400000);
	var submitStr=''
	
	for (var i=0; i < daysNext; i++){
		var dayShow=i+1
		var dateNextMonth = yearNext+'-'+monthNextGet+'-'+dayShow;


		var marketList=(localStorage.marketTourStr).split('<rd>')
		
		for (var m=0; m < marketList.length; m++){
			var dateGet=''
			var marketId=marketList[m].split('<fd>')[0]
			var marketName=marketList[m].split('<fd>')[1]
			var checkId=i+'n'+m+"_"+marketId
			check = $("#"+checkId).prop("checked");
			if(check) {
				dateGet=$("#"+i+"_date").val();
				if (submitStr==''){
					submitStr=dateGet+'<fd>'+marketId+'<fd>'+marketName
				}
				else{
					submitStr=submitStr+'<rd>'+dateGet+'<fd>'+marketId+'<fd>'+marketName
				}
			} 
			
			
		}
	}
	var errFlag=0
	if (submitStr==''){
		$("#err_marketTour").html('Select Market');
		errFlag=1
	}

		
		
	if (errFlag==0){
		//alert (localStorage.base_url+'tourDocEntry?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr));		
				
			   $.ajax(localStorage.base_url+'tourDocEntry?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr),{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										$("#wait_image_retTour").hide();	
										$("#err_marketTour").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
											$("#wait_image_retTour").hide();
											 if (status!='success'){
												$("#err_marketTour").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
											
													 if (data=='SUCCESS'){
															$("#err_marketTour").html("Submitted Successfully");
															localStorage.tour_doc_str=''
															showSubmitDocShow();
													 }
													 else{
															$("#err_marketTour").html(data);
															showSubmitDocShow();
													 }
		
											}
									}
							 
					 });//end ajax
				}//errorFlag

  }
function tourConfirm_doc(){	
	var pendingRep=localStorage.pendingRep
	
	if (pendingRep==''){
		$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
	}
	else{
		alert (localStorage.base_url+'tourConfirm_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep);
		$.ajax(localStorage.base_url+'tourConfirm_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#wait_image_route_pendingTour").hide();
								$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_route_pendingTour").hide();
									 if (status!='success'){
										$("#wait_image_route_pendingTour").hide(); 
										$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									
									 if (data=='SUCCESS'){
											$("#err_pendingRouteTour").html("Confirmed Successfully");
											$("#wait_image_route_pendingTour").hide();
											localStorage.tour_doc_str=''
											//alert (localStorage.pendingRep)
											repPendingDocShow(localStorage.pendingRep)
											repPendingDocView(pendingRep)
											
											
									 }
									 else{
											$("#err_pendingRouteTour").html(data);
											localStorage.tour_doc_str=''
									 }

							}
						}
					 
			 });//end ajax
		
		
		
	}//}//Sync date check
  }
function repPendingDocView(rep_id){
	
	//localStorage.pendingRep=rep_id
	localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").show();
	//alert (localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id)
	

	$.ajax(localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
										
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_rep_pendingTour").text("Retailer not available");	
											$("#wait_image_rep_pendingTour").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
										
										localStorage.repDocPending=resultArray[1];
										
										
										
										var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
										var d = new Date();
										var month = d.getMonth()+2;
										var day = d.getDate();
										var year =d.getFullYear();
										
										var monthThis=''
										
										if (month==1){monthThisShow='Jan'+'  '+year;}
										if (month==2){monthThisShow='Feb'+'  '+year;}
										if (month==3){monthThisShow='Mar'+'  '+year;}
										if (month==4){monthThisShow='Apr'+'  '+year;}
										if (month==5){monthThisShow='May'+'  '+year;}
										if (month==6){monthThisShow='Jun'+'  '+year;}
										if (month==7){monthThisShow='Jul'+'  '+year;}
										if (month==8){monthThisShow='Aug'+'  '+year;}
										if (month==9){monthThisShow='Sep'+'  '+year;}
										if (month==10){monthThisShow='Oct'+'  '+year;}
										if (month==11){monthThisShow='Nov'+'  '+year;}
										if (month==12){monthThisShow='Dec'+'  '+year;}
									
										var days = Math.round(((new Date(year, month))-(new Date(year, month-1)))/86400000);
										//alert (monthThisShow)
										var thisMonthTable='<table width="100%" border="0">  <tr>    <td>'+monthThisShow+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right">Approved</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
										
										docTThisMonthRow=localStorage.repDocPending
										//alert (docTThisMonthRow)
										for (var i=0; i < days; i++){
											var dayShow=i+1
											var fulDate=year+'-'+month+'-'+day
											
											var a = new Date(month+'/'+dayShow+'/'+year);
											var dayName=weekday[a.getDay()];
											var monthCheck=''
											var dayCheck=''
											
											if (month<10){monthCheck='0'+month}else{monthCheck=month}
											if (dayShow<10){dayCheck='0'+dayShow}else{dayCheck=dayShow}
											var dayCheckFinal=year+'-'+monthCheck+'-'+dayCheck
											
											//alert (dayCheckFinal)
											
												
											
											
											
											
											thisMonthTable=thisMonthTable+'<tr ><td >'+dayName+'</td><td>'+dayShow+'</td><td width="40%">'
											//'Bashndhara<br> Nadda<br>'
											if (docTThisMonthRow.indexOf('<'+dayCheckFinal+'>')!=-1){
												var dateRouteSingle=docTThisMonthRow.split('<'+dayCheckFinal+'>')[1].split('</'+dayCheckFinal+'>')[0]
												//if (dayShow==21){alert (dateRouteSingle)}
												var marketStrListThisMonth=dateRouteSingle.split('<rd>')
												var dayRoute=''
												for (var m=0; m < marketStrListThisMonth.length; m++){
													var marketIdThisMonth=marketStrListThisMonth[m].split('<fd>')[0]
													var marketNameThisMonth=marketStrListThisMonth[m].split('<fd>')[1]
													var marketStatusThisMonth=marketStrListThisMonth[m].split('<fd>')[2]
													
													dayRoute=dayRoute+marketNameThisMonth+'['+marketIdThisMonth+']'+'----'+marketStatusThisMonth+'<br>'
													//alert (checkId)
												}
												thisMonthTable=thisMonthTable+dayRoute+'<br>'
												//thisMonthTable=thisMonthTable+'<font id="'+i+'editinfo">'+marketNameThisMonth+'['+marketIdThisMonth+']'+'----'+marketStatusThisMonth+'</font><br>'
												var marketName
												var status
												//alert (dateRouteSingle)
											}
											
											thisMonthTable=thisMonthTable+'</td> </tr>'
											
										}
										thisMonthTable=thisMonthTable+'</table><br><br><br>'
										$('#repPendingShow').html(thisMonthTable)
										
										
										
										
										
										$("#err_rep_pendingTour").text("");	
										$("#wait_image_rep_pendingTour").hide();
										if (localStorage.user_type=='rep'){
											$("#tourButton").hide();
										}
										else{
											$("#tourButton").show();
										}
										//alert (rep_id)
										var repIdName=$("#"+rep_id).html();	
										localStorage.repIdName=repIdName
										$("#pendingRepShow").html(localStorage.repIdName);	
										repPendingDocView(pendingRep)
										//$('#tour_rep_pending_lv').empty()
//										$('#tour_rep_pending_lv').append(localStorage.repDocPending);
										
										//tour_ob.listview("refresh");	
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			$("#wait_image_route_pendingTour").hide();
			//alert (rep_id_pending)	 
//			$("#pendingRepShow").html(rep_id_pending);	
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}  
  
function tourCancel_doc(){	
	var pendingRep=localStorage.pendingRep
	
	if (pendingRep==''){
		$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
	}
	else{
		alert (localStorage.base_url+'tourCancel_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep);
		$.ajax(localStorage.base_url+'tourCancel_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#wait_image_route_pendingTour").hide();
								$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_route_pendingTour").hide();
									 if (status!='success'){
										$("#wait_image_route_pendingTour").hide(); 
										$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									
									 if (data=='SUCCESS'){
											$("#err_pendingRouteTour").html("Cancelled Successfully");
											$("#wait_image_route_pendingTour").hide();
											localStorage.tour_doc_str=''
											repPendingDocShow(localStorage.pendingRep)
											
									 }
									 else{
											$("#err_pendingRouteTour").html(data);
											localStorage.tour_doc_str=''
									 }

							}
						}
					 
			 });//end ajax
		
		
		
	}//}//Sync date check
  
  }  
  
function repPendingDocShow(rep_id){
	
	localStorage.pendingRep=rep_id
	localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").hide();
	$.ajax(localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_rep_pendingTour").html(resultArray[1]);	
											$("#wait_image_rep_pendingTour").hide();
											localStorage.repDocPending='';
											$('#tour_rep_pending_lv').empty()
											$('#tour_rep_pending_lv').append(localStorage.repDocPending);
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
										
										//alert (resultArray[1])
										
										
										
										
										localStorage.repDocPending=resultArray[1];
										$("#err_rep_pendingTour").text("");	
										$("#wait_image_rep_pendingTour").hide();
										if (localStorage.user_type=='rep'){
											$("#tourButton").hide();
										}
										else{
											$("#tourButton").show();
										}
										
										$('#tour_rep_pending_lv').empty()
										$('#tour_rep_pending_lv').append(localStorage.repDocPending);
										
										//tour_ob.listview("refresh");	
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			checkRequest()	 
			$("#wait_image_route_pendingTour").hide();	 
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}
//==================================================================================	
function campaign_as_sample(){
	var campaign_show= localStorage.campaign_doc_str+'<rd>';
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	

	var productSampleStr=localStorage.productSampleStr;
	var sample_show_1=localStorage.sample_show_1
	var productSampleStr=localStorage.productSampleStr

	for (var j=0; j < campaign_showListLength ; j++){
		if (campaign_showList[j].length !=0){
				if (productSampleStr.indexOf(campaign_showList[j])==-1){
					$("#sample_qty"+campaign_showList[j]).val(0);
					productSampleStr=productSampleStr+'<rd>'+campaign_showList[j]+'<fd>0'
				
					
				}
		}
		
	}

	localStorage.productSampleStr=productSampleStr;
	getDocSampleData();
	
	
				
		
	
	
}

//======================Sample=====================
//--------------------------------- Sample: Show Sample from home

function getDocSampleData(){	
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	//alert (localStorage.productSampleStr);
	var sample_show_1='<ul  data-role="listview">';
	for (var j=0; j < sampleProductLength; j++){
			if (sampleProductList[j] != ''){
				//alert (sampleProductList[j]);
				var sampleProductsingle=sampleProductList[j];
				var sampleProductsingleList=sampleProductsingle.split('<fd>');
	
				var pname=$("#sample_name"+sampleProductsingleList[0]).val();
				
				sample_show_1=sample_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td >'+pname+'('+sampleProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="s_cart_qty'+ sampleProductsingleList[0] +'"  onBlur="sampleCartData_keyup(\''+sampleProductsingleList[0] +'\');" value="'+sampleProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
			}
		}
		
		if (sample_show_1!=''){
				sample_show_1=sample_show_1+'</ul>';
		}
		
		localStorage.sample_show_1=sample_show_1;
		sample_show_1=sample_show_1.replace('undefined','')
		//alert (sample_show_1.indexOf('undefined'));
		if  (sample_show_1.indexOf('undefined')==-1 ){
			
			$('#doc_sample').empty();
			$('#doc_sample').append("</br>"+localStorage.sample_show_1+"</br>").trigger('create');
		}
		$("#wait_image_visit_submit_doc").hide();
		
		if (localStorage.doctor_plan_flag==1){
			$("#visit_submit_save_doc").show();		
			
		}
		else{
			$("#visit_submit_save_doc").hide();		
		}
		$.afui.loadContent("#page_visit_doc",true,true,'right');
		
		
	
	
}
function getDoctorSample(){	
	$("#myerror_doctor_sample").html('');
	if ((localStorage.productSampleStr==undefined) || (localStorage.productSampleStr=='undefined')){
		localStorage.productSampleStr='';
	}
	
	//  Set Sample Data==========
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	for (var j=0; j < sampleProductLength; j++){
			
			var sampleProductsingle=sampleProductList[j];
			var sampleProductsingleList=sampleProductsingle.split('<fd>');
			
			
			$("#sample_qty"+sampleProductsingleList[0]).val(sampleProductsingleList[1]);

		
	}
	
	$("#sample_combo_id").val('A');
	searchSample()
	$.afui.loadContent("#page_doctor_sample",true,true,'right');
	
	//location.reload();
	//-----
}




//--------------------------------- Order: Set Order data
function getSampleData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#sample_qty"+product_id).val().replace('.','').substring(0,4);
	$("#sample_qty"+product_id).val(pqty);
	
	//alert (pqty)
	var productSampleStr=localStorage.productSampleStr
	
	
	var productSampleShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
				productSampleShowStr=pname+'('+pqty+')'
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
				productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			for (var j=0; j < sampleProductLength; j++){
			var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					if (sampleProductId==pid){
						productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
							productSampleShowStr=pname+'('+pqty+')'
						}else{
							productSampleStr=productSampleStr+'<rd>'+sampleProductId+'<fd>'+pqty
							productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
							}		

					}
					
				}
			}
			
		}
		localStorage.productSampleStr=productSampleStr;
		//alert (localStorage.productSampleStr);
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=orderProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					}
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productSampleStr=productSampleStr
	}
	
	//	------------------------------------------------------
}
	
function sampleCartData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#s_cart_qty"+product_id).val();
	
	$("#sample_qty"+product_id).val(pqty);
	var productSampleStr=localStorage.productSampleStr
	
	//alert (productOrderStr)
	var sample_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			
			for (var j=0; j < sampleProductLength; j++){
				var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					
					if (sampleProductId==pid){
						product_index=productSampleStr.indexOf(product_id)
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
						}else{
							productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productSampleStr=productSampleStr;
		//alert (productsampleStr)
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=sampleProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					} //if (sampleProductLength>1){
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					} //if (sampleProductLength==1
				
				} //if (sampleProductId==pid)
					
					
					
				}//if(sampleProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productSampleStr=productSampleStr
		
		
		
		//getDocSampleData();

	}
//================Gift=========================
function getDoctorGift(){
	if ((localStorage.gift_tbl_doc==undefined) || (localStorage.gift_tbl_doc=='undefined')){
		localStorage.gift_tbl_doc='';
	}
	
	//  Set Gift Data==========
	var gift_show=localStorage.productGiftStr;
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		$('#gift_qty'+giftProductsingleList[0]).val(giftProductsingleList[1]);

	}
	$.afui.loadContent("#page_doctor_gift",true,true,'right');

	
}
//--------------------------------- Order: Set Order data
function getGiftData_keyup(product_id){
	//alert (product_id);
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#gift_qty"+product_id).val().replace('.','').substring(0,4);
	
	$("#gift_qty"+product_id).val(pqty);
	//alert (pqty)
	var productGiftStr=localStorage.productGiftStr
	var productGiftShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		//alert (productGiftStr.indexOf(product_id));
		if (productGiftStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
				productGiftShowStr=pname+'('+pqty+')'
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
				productGiftShowStr=productGiftShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			for (var j=0; j < giftProductLength; j++){
			var giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					if (giftProductId==pid){
						productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
						
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
							productGiftShowStr=pname+'('+pqty+')'
						}else{
							productGiftStr=productGiftStr+'<rd>'+giftProductId+'<fd>'+giftProductQty
							productGiftShowStr=productGiftShowStr+', '+pname+'('+giftProductQty+')'
							}		
					}
					
				}
			}
			
		}
		localStorage.productGiftStr=productGiftStr;
		
		
	}
	else{		
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (orderProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					}
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productGiftStr=productGiftStr
	}
	//	------------------------------------------------------
}
function getDocGiftData(){	
	var gift_show=localStorage.productGiftStr;
	//alert (localStorage.productGiftStr)
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	var gift_show_1='<ul  data-role="listview">';
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		var pname=$("#doc_gift_name"+giftProductsingleList[0]).val();
		gift_show_1=gift_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+giftProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ giftProductsingleList[0] +'"  onBlur="giftCartData_keyup(\''+giftProductsingleList[0] +'\');" value="'+giftProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (gift_show_1!=''){
			gift_show_1=gift_show_1+'</ul>';
	}
	
	localStorage.gift_show_1=gift_show_1;
	
	if  (gift_show_1.indexOf('undefined')==-1 ){
		$('#doc_gift').empty();
		$('#doc_gift').append("</br>"+localStorage.gift_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}







function giftCartData_keyup(product_id){
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	
	
	$("#gift_qty"+product_id).val(pqty);
	var productGiftStr=localStorage.productGiftStr
	
	var gift_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productGiftStr.indexOf(product_id)==-1){
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			//alert (giftProductLength);
			
			for (var j=0; j < giftProductLength; j++){
				var giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					
					if (giftProductId==pid){
						product_index=productGiftStr.indexOf(product_id)
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
						}else{
							productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productGiftStr=productGiftStr;
		
	}
	else{
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (giftProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					} //if (giftProductLength>1){
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					} //if (giftProductLength==1
				
				} //if (giftProductId==pid)
					
					
					
				}//if(giftProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productGiftStr=productGiftStr
		//getDocGiftData();
		
//		==================================
	}


//===========================PPM Start=================

function getDoctorppm(){
	if ((localStorage.ppm_tbl_doc==undefined) || (localStorage.ppm_tbl_doc=='undefined')){
		localStorage.ppm_tbl_doc='';
	}
	
	//  Set ppm Data==========
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		$('#ppm_qty'+ppmProductsingleList[0]).val(ppmProductsingleList[1]);
	}
	$.afui.loadContent("#page_doctor_ppm",true,true,'right');

}
//--------------------------------- Order: Set Order data
function getppmData_keyup(product_id){
	//alert ('product_id');
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#ppm_qty"+product_id).val().replace('.','').substring(0,4);
	$("#ppm_qty"+product_id).val(pqty)
	
	
	var productppmStr=localStorage.productppmStr
	var productppmShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productppmStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
				productppmShowStr=pname+'('+pqty+')'
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
				productppmShowStr=productppmShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			for (var j=0; j < ppmProductLength; j++){
			var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					if (ppmProductId==pid){
						productppmStr=productppmStr.replace(ppmProductList[j], "")
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
							productppmShowStr=pname+'('+pqty+')'
						}else{
							productppmStr=productppmStr+'<rd>'+ppmProductId+'<fd>'+ppmProductQty
							productppmShowStr=productppmShowStr+', '+pname+'('+ppmProductQty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productppmStr=productppmStr;
		
		
	}
	else{		
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (orderProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					}
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productppmStr=productppmStr
	}
	//alert (localStorage.productppmStr)	
	//	------------------------------------------------------
}
function getDocppmData(){	
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	var ppm_show_1='<ul  data-role="listview">';
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		var pname=$("#doc_ppm_name"+ppmProductsingleList[0]).val();
		ppm_show_1=ppm_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+ppmProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ ppmProductsingleList[0] +'"  onBlur="ppmCartData_keyup(\''+ppmProductsingleList[0] +'\');" value="'+ppmProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (ppm_show_1!=''){
			ppm_show_1=ppm_show_1+'</ul>';
	}
	
	
	localStorage.ppm_show_1=ppm_show_1;
	if  (ppm_show_1.indexOf('undefined')==-1 ){
		$('#doc_ppm').empty();
		$('#doc_ppm').append("</br>"+localStorage.ppm_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}







function ppmCartData_keyup(product_id){
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	

	
	$("#ppm_qty"+product_id).val(pqty);
	var productppmStr=localStorage.productppmStr
	
	var ppm_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productppmStr.indexOf(product_id)==-1){
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			
			for (var j=0; j < ppmProductLength; j++){
				var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					
					if (ppmProductId==pid){
						product_index=productppmStr.indexOf(product_id)
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
						}else{
							productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productppmStr=productppmStr;
		
	}
	else{
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (ppmProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					} //if (ppmProductLength>1){
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					} //if (ppmProductLength==1
				
				} //if (ppmProductId==pid)
					
					
					
				}//if(ppmProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productppmStr=productppmStr
		//getDocppmData();
		
		
	}




//============================ppm End===================
//----------------------Doctor visit submit
function visitSubmit_doc(){	
	$("#errorChkVSubmit").text("");
	
	var visitClientId=localStorage.visit_client.split('|')[1]	
	var visit_type=localStorage.visit_type
	var scheduled_date=localStorage.scheduled_date
	
	
	var sample_doc_Str=localStorage.productSampleStr;
	var gift_doc_Str=localStorage.productGiftStr;
	var campaign_doc_str=localStorage.campaign_doc_str; 
	
	var ppm_doc_Str=localStorage.productppmStr;
	
	var notes= $("#doc_feedback").val();
	var doc_others= $("#doc_others").val();
	//alert (notes);
	notes=replace_special_char(notes);
	//alert (campaign_doc_str)
	//----------------------- Campaign check
	
	if (campaign_doc_str.indexOf('undefined')!=-1){
		campaign_doc_Str=''
	}else{
		var campaignList=campaign_doc_str.split('<rd>');	
		var campaignListLength=campaignList.length;	
		campaign_submit='';
		
		for ( i=0; i < campaignListLength; i++){		
			
			var camp_name=''
			if (campaignList[i] !=''){
				 camp_name=$("#doc_camp_name"+campaignList[i]).val();
			}
			if (campaign_submit==''){
				campaign_submit=campaignList[i]
			}
			else{
				campaign_submit=campaign_submit+','+campaignList[i]
			}
			if (campaignList[i] !=''){
				campaign_submit=campaign_submit+'|'+camp_name
			}
			
		}
	}
	//alert (campaign_submit);
	//----------------------- Sample check
	//$("#errorChkVSubmit").html(sample_doc_Str);
	//alert (sample_doc_Str.indexOf('undefined'));
	if (sample_doc_Str.indexOf('undefined')!=-1){
		sample_doc_Str=''
	}else{
		var sampleList=sample_doc_Str.split('<rd>');	
		var sampleListLength=sampleList.length;	
		sample_submit='';
		for ( i=0; i < sampleListLength; i++){		
			sample_single=sampleList[i]
			sample_single_list=sample_single.split('<fd>');
			var sample_name=''
			if (sample_single_list[0] !=''){
				sample_name=$("#sample_name"+sample_single_list[0]).val();
			}
			//sample_name=sample_name.replace('undefined','')
			
			if (sample_submit==''){
				sample_submit=sample_single_list[1]+','+sample_single_list[0]
			}
			else{
				sample_submit=sample_submit+'.'+sample_single_list[1]+','+sample_single_list[0]
			}
			if (sample_single_list[0] !=''){
				sample_submit=sample_submit+'|'+sample_name
			}
			
		}
	}
	
	//----------------------- Gift check
	if (gift_doc_Str.indexOf('undefined')!=-1){
		gift_doc_Str=''
		gift_submit=''
	}else{
		var giftList=gift_doc_Str.split('<rd>');	
		var giftListLength=giftList.length;	
		gift_submit='';
		for ( i=0; i < giftListLength; i++){	
			gift_single=giftList[i];
			gift_single_list=gift_single.split('<fd>');
			 
			var gift_name=''
			if (gift_single_list[0] !=''){
				gift_name=$("#doc_gift_name"+sample_single_list[0]).val();
			}
			if (gift_submit==''){
				gift_submit=gift_single_list[1]+','+gift_single_list[0]+'|'+gift_name
			}
			else{
				gift_submit=gift_submit+'.'+gift_single_list[1]+','+gift_single_list[0]+'|'+gift_name
			}
			if (gift_single_list[0] !=''){
				gift_submit=gift_submit+'|'+gift_name
			}
		}
	}
	//alert (gift_submit)
	
	//----------------------- ppm check
	if (ppm_doc_Str.indexOf('undefined')!=-1){
		ppm_doc_Str=''
		ppm_submit=''
	}else{
		var ppmList=ppm_doc_Str.split('<rd>');	
		var ppmListLength=ppmList.length;	
		
		ppm_submit='';
		for ( i=0; i < ppmListLength; i++){	
			ppm_single=ppmList[i];
			ppm_single_list=ppm_single.split('<fd>');
			var doc_ppm_name=''
			if (ppm_single_list[0] !=''){
				doc_ppm_name=$("#doc_ppm_name"+ppm_single_list[0]).val();
			}
			if (ppm_submit==''){
				ppm_submit=ppm_single_list[1]+','+ppm_single_list[0]//+'|'+doc_ppm_name
				
			}
			else{
				ppm_submit=ppm_submit+'.'+ppm_single_list[1]+','+ppm_single_list[0]//+'|'+doc_ppm_name
			}
			if (ppm_single_list[0] != ''){
					ppm_submit=ppm_submit+'|'+doc_ppm_name
			}
		}
	}
	//-------------------------------
	
	
	
	

	//------------------------
	campaign_submit=campaign_submit.replace('undefined','').replace(',.','');
	gift_submit=gift_submit.replace('undefined','').replace(',.','');
	
	sample_submit=sample_submit.replace('undefined','').replace(',.','');
	
	notes=notes.replace('undefined','').replace(',.','');
	ppm_submit=ppm_submit.replace('undefined','').replace(',.','');
	
	
	
	if (campaign_submit==','){
		campaign_submit='';
		
	}
	if (gift_submit==','){
		gift_submit='';
		
	}
	if (sample_submit==','){
		sample_submit='';
		
	}
	if (ppm_submit==','){
		ppm_submit='';
		
	}
	
	var msg=campaign_submit+'..'+gift_submit+'..'+sample_submit+'..'+notes+'..'+ppm_submit
	//alert (campaign_submit)
//	alert (gift_submit)
//	alert (sample_submit)
//	alert (ppm_submit)
	
	//msg1=msg.replace('undefined','');
	//alert (msg1)
	//$("#errorChkVSubmit").html(msg1);
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate();if(day_1.length==1)	{day_1="0" +day_1};
	var month_1 = currentDate_1.getMonth() + 1;if(month_1.length==1)	{month_1="0" +month_1};
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "-" + month_1 + "-" + day_1
	
	var v_with=$("input[name=v_with]:checked").val()
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
							
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	
	}
	
	//if  (localStorage.sync_date!=today_1){
//	$("#errorChkVSubmit_doc").html('Please sync first');
//	
//	}
//	else{
			if (v_with=='' || v_with==undefined || v_with=='undefined'){
				$("#errorChkVSubmit_doc").html('Visited with not selected');		
			}else{
				
				//if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
		//							
		//								lat=localStorage.latitude
		//								longitude=localStorage.latitude
		//								localStorage.location_detail="LastLocation-"+localStorage.location_detail;
		//								
		//						
		//							
		//							
		//							//$("#errorChkVSubmit").html('Location not Confirmed');	
		//							//$("#visit_location").show();	
		//							//$("#visit_submit").hide();	
		//		}else{
										
										if (visitClientId=='' || visitClientId==undefined){
											$("#errorChkVSubmit_doc").html('Invalid Client');		
										}else{
											if(visit_type=='' || visit_type==undefined){
												$("#errorChkVSubmit_doc").html('Invalid Visit Type');
											}else{
													
												//alert (localStorage.productOrderStr);
												var marketNameId=localStorage.visit_market_show.split('|');
												var market_Id=marketNameId[1];		
												
												
												//$("#errorChkVSubmit").html(msg1);
												
											// $("#errorChkVSubmit_doc_t").html(localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+msg+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others)
											 $("#errorChkVSubmit_doc_t").val(localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others+'&location_detail='+localStorage.location_detail)
												// ajax-------
												//alert (localStorage.location_error);
											if ( localStorage.location_error==2){
												$("#errorChkVSubmit_doc").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
											}
											else {	
												$("#visit_submit_doc").hide();
												$("#wait_image_visit_submit_doc").show();	
										$.ajax(localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg=' +encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others,{
										// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();	
										$("#error_login").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
												//$.post(localStorage.base_url+'check_user?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,client_id:visitClientId,visit_type:visit_type,schedule_date:scheduled_date,msg:msg,lat:lat,long:longitude,v_with:v_with,route:market_Id,location_detail:localStorage.location_detail},
		//    						 
		//								
		//								 function(data, status){
											 if (status!='success'){
												$("#errorChkVSubmit_doc").html('Network Timeout. Please check your Internet connection...');
												$("#wait_image_visit_submit_doc").hide();
												$("#visit_submit_doc").show();
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
												if (resultArray[0]=='FAILED'){
													$("#errorChkVSubmit_doc").html(resultArray[1]);
													$("#wait_image_visit_submit_doc").hide();
													$("#visit_submit_doc").show();	
												}
											  else if (resultArray[0]=='SUCCESS'){
																	
													//-----------
													localStorage.visit_client=''
													
												
													
													localStorage.visit_page=""
													
													localStorage.productGiftStr='';
													localStorage.campaign_doc_str=''
													localStorage.productSampleStr=''
													localStorage.productppmStr=''
													
													localStorage.campaign_show_1='';
													localStorage.gift_show_1='';
													localStorage.sample_show_1='';
													localStorage.ppm_show_1='';
													
																	
													////-------------
													// Clear Campaign and sample
														
														//localStorage.productOrderStr='';
														var productList=localStorage.productListStr.split('<rd>');
														var productLength=productList.length;
														for ( i=0; i < productLength; i++){
															var productArray2 = productList[i].split('<fd>');
															var product_id2=productArray2[0];	
															var product_name2=productArray2[1];
															$("#sample_qty"+product_id2).val('');
															
															
															var camp_combo="#doc_camp"+product_id2
															$(camp_combo).attr('checked', false);
															//alert (product_id2);
														}	
													// Clear Gift
														
														//localStorage.productOrderStr='';
														var giftList=localStorage.gift_string.split('<rd>');
														var giftLength=giftList.length;
														for ( i=0; i < giftLength; i++){
															var giftArray2 = giftList[i].split('<fd>');
															var gift_id2=giftArray2[0];	
															//var product_name2=giftArray2[1];
															$("#gift_qty"+gift_id2).val('');
														}
														// Clear ppm
														
														//localStorage.productOrderStr='';
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														for ( i=0; i < ppmLength; i++){
															var ppmArray2 = ppmList[i].split('<fd>');
															var ppm_id2=ppmArray2[0];	
															//var product_name2=ppmArray2[1];
															$("#ppm_qty"+ppm_id2).val('');
															
			
														}	
															
															//====================================
														
														
														$("#doc_feedback").val('');
														$("#doc_others").val('');
														
														//$(".market").html('');
														$(".visit_client").html('');
														//--------------------------------------------------------
														$("#errorChkVSubmit").html('');
														$("#lat").val('');
														$("#longitude").val('');
														$("#lscPhoto").val('');
														document.getElementById('myImage').src = '';
														
														$("#lat_p").val('');
														$("#long_p").val('');								
				//										
														//$("#checkLocation").html('');
				//										$("#checkLocationProfileUpdate").html('');
														
														
														
														
														
														$("#errorChkVSubmit_doc").html('');
														$("#wait_image_visit_submit_doc").hide();
														$("#visit_submit_doc").show();	
														$("#checkLocation_doc").html('');
														//$("#visit_location_doc").show();
														
														
														
														//--
												//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
												
												$("#visit_success").html('</br></br>Submitted Successfully');
												
												if (localStorage.saveSubmitDocFlag==1){
													saveDelete_doc(localStorage.saveSubmitDocI)
												}
												localStorage.visit_page=''
												//saveDelete_doc(i)
												
												
												
												
												/// CANCEL ALLcancelVisitPage();
												
													localStorage.campaign_show_1="";
													localStorage.gift_show_1="";
													localStorage.ppm_show_1=""
													localStorage.sample_show_1="";
													
													
													
													localStorage.productGiftStr='';
													localStorage.campaign_doc_str=''
													localStorage.productSampleStr=''
													localStorage.productppmStr='';
													
													set_doc_all();
													$(".visit_client").html('');
												
												
												
												
												//var url = "#page_confirm_visit_success";	
												var image = document.getElementById('myImageDoc');
												image.src = "";
												imagePath = "";
												$("#docVisitPhoto").val(imagePath);
												$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
												//location.reload();
																											
									}else{						
										$("#errorChkVSubmit_doc").html('Network Timeout. Please check your Internet connection.');
										$("#wait_image_visit_submit_doc").hide();
										$("#visit_submit_doc").show();								
										}
									}
								}
							 });//end post	
							}//error Location
						}
					}
				//  }//locaction check error
			}//Visited with check
	//}//Sync date check
  }
//==============================Doctor visit save===========================
function saveDocvisit(){	
	$("#errorChkVSubmit").text("");
	
	visitClientId=localStorage.visit_client.split('|')[1]	
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date

	ppm_doc_Str=localStorage.productppmStr;

	notes= $("#doc_feedback").val();
	doc_others= $("#doc_others").val();
	
	notes=replace_special_char(notes);

	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate();if(day_1.length==1)	{day_1="0" +day_1};
	var month_1 = currentDate_1.getMonth() + 1;if(month_1.length==1)	{month_1="0" +month_1};
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "-" + month_1 + "-" + day_1
	
	var v_with=$("input[name=v_with]:checked").val()
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
							
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	
	}
	

			if (v_with=='' || v_with==undefined || v_with=='undefined'){
				$("#errorChkVSubmit_doc").html('Visited with not selected');		
			}else{				
					if (visitClientId=='' || visitClientId==undefined){
						$("#errorChkVSubmit_doc").html('Invalid Client');		
					}else{
						if(visit_type=='' || visit_type==undefined){
							$("#errorChkVSubmit_doc").html('Invalid Visit Type');
						}else{
								
							//alert (localStorage.productOrderStr);
							var marketNameId=localStorage.visit_market_show.split('|');
							var market_Id=marketNameId[1];		
						var  docSaveData=localStorage.docSaveData
						
						if (docSaveData.indexOf(localStorage.visit_client) !=-1){
							docSaveDataList = docSaveData.split('<doc>');	
							for ( i=0; i < docSaveDataList.length; i++){
								//alert (docSaveData.indexOf(localStorage.visit_client))
								var visit_client = docSaveDataList[i].split('<d>')[0];
								if (visit_client==localStorage.visit_client){
									var replaceStr=docSaveDataList[i]+'<doc>'
									docSaveData=docSaveData.replace(replaceStr,'')
									localStorage.docSaveData=docSaveData
								}
							}
						}
									
						 $("#errorChkVSubmit_doc_t").val(docSaveData+localStorage.visit_client+'<d>'+localStorage.visit_market_show+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+localStorage.productSampleStr+'<d>'+localStorage.productGiftStr+'<d>'+localStorage.campaign_doc_str+'<d>'+localStorage.productppmStr+'<d>'+notes+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<doc>')

							//var docSaveData=localStorage.docSaveData
							//alert (localStorage.visit_client+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+encodeURI(msg)+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<doc>')
							//alert ('sdas')
							var doctor_visit_save=docSaveData+localStorage.visit_client+'<d>'+localStorage.visit_market_show+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+localStorage.productSampleStr+'<d>'+localStorage.productGiftStr+'<d>'+localStorage.campaign_doc_str+'<d>'+localStorage.productppmStr+'<d>'+notes+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<doc>'
							
							localStorage.docSaveData=doctor_visit_save
					//alert (localStorage.docSaveData)
								localStorage.visit_client=''
								localStorage.visit_page=""
								localStorage.productGiftStr='';
								localStorage.campaign_doc_str=''
								localStorage.productSampleStr=''
								localStorage.productppmStr=''
								
								localStorage.campaign_show_1='';
								localStorage.gift_show_1='';
								localStorage.sample_show_1='';
								localStorage.ppm_show_1='';
								
												
								////-------------
								// Clear Campaign and sample
									
									//localStorage.productOrderStr='';
									var productList=localStorage.productListStr.split('<rd>');
									var productLength=productList.length;
									for ( i=0; i < productLength; i++){
										var productArray2 = productList[i].split('<fd>');
										var product_id2=productArray2[0];	
										var product_name2=productArray2[1];
										$("#sample_qty"+product_id2).val('');
										
										
										var camp_combo="#doc_camp"+product_id2
										$(camp_combo).attr('checked', false);
										//alert (product_id2);
									}
								// Clear Gift
									
									//localStorage.productOrderStr='';
									var giftList=localStorage.gift_string.split('<rd>');
									var giftLength=giftList.length;
									for ( i=0; i < giftLength; i++){
										var giftArray2 = giftList[i].split('<fd>');
										var gift_id2=giftArray2[0];	
										//var product_name2=giftArray2[1];
										$("#gift_qty"+gift_id2).val('');
									}
									// Clear ppm
									
									//localStorage.productOrderStr='';
									var ppmList=localStorage.ppm_string.split('<rd>');
									var ppmLength=ppmList.length;
									for ( i=0; i < ppmLength; i++){
										var ppmArray2 = ppmList[i].split('<fd>');
										var ppm_id2=ppmArray2[0];	
										//var product_name2=ppmArray2[1];
										$("#ppm_qty"+ppm_id2).val('');
										

									}	
										
										//====================================
									
									
									$("#doc_feedback").val('');
									$("#doc_others").val('');
									
									//$(".market").html('');
									$(".visit_client").html('');
									//--------------------------------------------------------
									$("#errorChkVSubmit").html('');
									$("#lat").val('');
									$("#longitude").val('');
									$("#lscPhoto").val('');
									document.getElementById('myImageDoc').src = '';
									
									$("#lat_p").val('');
									$("#long_p").val('');								
											
									//alert (localStorage.docSaveData)
									
									
									
									$("#errorChkVSubmit_doc").html('Saved Successfully');
									$("#wait_image_visit_submit_doc").hide();
									$("#visit_submit_doc").show();	
									$("#checkLocation_doc").html('');
									//$("#visit_location_doc").show();
									
									
									
									//--
							//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
							//$("#visit_success").html('</br></br>Submitted Successfully');
							localStorage.visit_page=''
							
							
							
							
							/// CANCEL ALLcancelVisitPage();
								image.src = "";
								imagePath = "";
								$("#docVisitPhoto").val(imagePath);
								
								localStorage.campaign_show_1="";
								localStorage.gift_show_1="";
								localStorage.ppm_show_1=""
								localStorage.sample_show_1="";
								
								
								
								localStorage.productGiftStr='';
								localStorage.campaign_doc_str=''
								localStorage.productSampleStr=''
								localStorage.productppmStr='';
								
								set_doc_all();
								$(".visit_client").html('');
												
												
												
												
																											
									
								
						
						}
					}
				//  }//locaction check error
			}//Visited with check
	//}//Sync date check
  }
//===================Save visit
//-----------------------------Visit Save Start
function visitSave(){
	// alert ("NNNN");
	$("#errorChkVSubmit").text("");
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');


	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
		marchandizingInfoStr=''

	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	var delivery_date_save=$("#delivery_date").val();
	var collection_date_save=$("#collection_date").val();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//var bonus_combo=$("#bonus_combo").val();
	
	var bonus_combo=($("input:radio[name='bonus_combo']:checked").val())
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	//alert (bonus_combo)
	
	//Cleaar special char from feedback

	
	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);
	var imageName=localStorage.user_id+'_'+now+'.jpg';
		

			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					//alert (localStorage.productOrderStr);
					
					//$("#err_save_visit").text(visitClientId+'<fd>'+visit_type+'<fd>'+scheduled_date+'<fd>'+marketInfoStr+'<fd>'+productOrderStr+'<fd>'+marchandizingInfoStr+'<fd>'+campaign_str+'<fd>'+lat+'<fd>'+longitude+'<fd>'+imageName+'<fd>'+localStorage.payment_mode+'<fd>'+chemist_feedback+'<rd>')
				var dt = new Date();
				var hour=dt.getHours();if(hour>12){hour=hour-12};
				var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
				var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
				var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
				var year = dt.getFullYear()
				var today=  year + "-" + month + "-" + day +' '+time
				if (dt.getHours() > 12 ) {today=today+ ' PM'} else {today=today+ ' AM'};
					
													
				var save_data = localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+payment_mode+'<fdfd>'+chemist_feedback+'<fdfd>'+delivery_date_save+'<fdfd>'+collection_date_save+'<fdfd>'+bonus_combo+'<fdfd>'+today+'<rdrd>';	
													//-----------
						
			// Save data edit========================
			if (localStorage.saved_data_submit==1){
				var visit_save=localStorage.visit_save;
				var saved_data_show=localStorage.saved_data_show;
				var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>",save_data)
				//localStorage.visit_save=visit_save_data;
				localStorage.visit_save=visit_save_data
				after_save_data();
				
			}
			else{
				if (saved_dataArray.length-1 < parseInt(localStorage.save_visit_limit) ){
					localStorage.visit_save=localStorage.visit_save+save_data
					after_save_data();
				}
				else{
					alert ("Your Saved limit is " +localStorage.save_visit_limit );
				}
			}
					
					$.afui.loadContent("#page_confirm_visit_save",true,true,'right');

													
																							
			
			
			}
		}
	

	
}

function after_save_data(){
	localStorage.visit_client=''
	localStorage.marchandizingStr=''
	
	localStorage.marketInfoLSCStr=''
	
	localStorage.marketInfoStr='';
	localStorage.marketInfoSubmitStr='';
	
	localStorage.productOrderStr='';
	localStorage.marchandizingInfoStr='';
	localStorage.visit_camp_list_str='';
	localStorage.visit_camp_submit_str='';
	visitCampaginTempArray=[];
	visitCampaginArray=[];
	
	localStorage.visit_page="";
	
	localStorage.show_total="";
	
	$("#chemist_feedback").val('')
							
							

	//-------------
	// Clear localStorage
		
	localStorage.productOrderStr='';
	cancel_cart();
		

	//--------------------------------------------------------
	$(".visit_client").html('');
	
	$("#errorChkVSubmit").html('');
	$("#lat").val('');
	$("#longitude").val('');
	$("#lscPhoto").val('');
	document.getElementById('myImage').src = '';
	
	$("#lat_p").val('');
	$("#long_p").val('');								
	
	$("#checkLocation").html('');
	//$("#checkLocationProfileUpdate").html('');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	
	$("#product_total_last").html('');
	$("#product_list_tbl_cart").html('');
	$("#product_total_cart").html('');
	$("#item_combo_id").val('Search');
	
	
	
	//--
	$("#visit_save").html('</br><font style="color:#942342;">Saved in your mobile. Please submit from saved order when you have good network. </font>');
	
	
	$("#visit_location").show();	
	$("#visit_submit").hide();
	$("#checkLocation").hide('');
	
}

//================== Show saved visit
function getvisitSave_data(){
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');
	
	var saved_data_list="";
	
	//alert (saved_dataArray.length)
	for (var i=0; i < saved_dataArray.length -1 ; i++){
		var visit_market_show = saved_dataArray[i].split('<fdfd>')[0];
		var visit_client_show = saved_dataArray[i].split('<fdfd>')[1];
		var visit_time_show = saved_dataArray[i].split('<fdfd>')[17];
		
		localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show
			
	   saved_data_list=saved_data_list+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><table width="100%" border="0"><tr><td width="2%"></td><td width="80%" onClick="set_save_data('+i+')"  >'+'<font style="font-size:16px ;color:#306161"><b>'+visit_client_show+'</b></font>( '+visit_market_show+' )'+'</br><font style="color:#804040"> '+visit_time_show+'</font></td><td>' +'<input type="submit" style="width:100%; height:30px; width:40px; background-color:#09C; color:#FFF; font-size:15px" onClick="cancelSave('+i+')" value="X"  >' +'</font>' +'</td> </tr></table></li>'
	  // alert (client_id);
														
	}
	var saved_visit=$('#saved_visit');
	
	saved_visit.empty()
	saved_visit.append(saved_data_list);
	//saved_visit.listview("refresh");
	//alert (client_id)												
}


function cancelSave(i){
	var visit_save=localStorage.visit_save
	var saved_data_show=visit_save.split('<rdrd>')[i];
	var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")

	localStorage.visit_save=visit_save_data
	after_save_data()
	
	saved_visit()
}




function set_save_data(i){
	cancel_cart();
	var visit_save=localStorage.visit_save
	var saved_data_show =visit_save.split('<rdrd>')[i];
	localStorage.saved_data_show = saved_data_show;
	
	
	
	
	var saved_data_show_array=saved_data_show.split('<fdfd>')
	
	var market_name = saved_data_show_array[0];
	var visit_client = saved_data_show_array[1];
	
	var visitClientId = saved_data_show_array[2];
	var visit_type = saved_data_show_array[3];
	var scheduled_date = saved_data_show_array[4];
	var marketInfoStr = saved_data_show_array[5];
	var productOrderStr = saved_data_show_array[6];
	var marchandizingInfoStr = saved_data_show_array[7];
	var campaign_str = saved_data_show_array[8];
	var lat = saved_data_show_array[9];
	var longitude = saved_data_show_array[10];
	var imageName = saved_data_show_array[11];
	var payment_mode = saved_data_show_array[12];
	var chemist_feedback = saved_data_show_array[13];
	var delivery_date_show = saved_data_show_array[14];
	var collection_date_show = saved_data_show_array[15];
	var bonus_combo = saved_data_show_array[16];
	
	//alert (bonus_combo)
	//$('#bonus_combo').empty()
	
	
	//alert (payment_mode)
	//alert (delivery_date_show)
	//localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+localStorage.payment_mode+'<fdfd>'+chemist_feedback+'<rdrd>'
	
	
	
	
	localStorage.visit_market_show=market_name
	var market_Id=market_name.split('|')[1];

	
	localStorage.visit_client_show=visit_client
	localStorage.visit_client=visitClientId
	
	localStorage.productOrderStr=productOrderStr
	$("#chemist_feedback").val(chemist_feedback);
	
	
	$(".market").html(market_name);								
	$(".visit_type").html(visit_type);								
	$(".s_date").html(scheduled_date);
	$(".visit_client").html(visit_client);
	
	getOrder_load();
	cart_data();
	
	$("#delivery_date").val(delivery_date_show);
	$("#collection_date").val(collection_date_show);
	$("#chemist_feedback").val(chemist_feedback);
	
	//alert (localStorage.visit_location_flag)
	if (localStorage.visit_location_flag=='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").show();
		$("#visit_submit").hide();
		
	}
	
	//$("#errorChkVSubmit").html('');
//	$("#errorConfiProfileUpdate").html('');
//	$("#errorChkVSubmit_doc").html('');
	$("#visit_submit").hide();
	$("#visit_location").show();
	if (localStorage.visit_location_flag!='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").hide();
		$("#visit_submit").show();
		
	}
	if (localStorage.delivery_date_flag=='YES'){
		$("#delivery_date_div").show();
	}
	else{
		$("#delivery_date_div").hide();
	}
	if (localStorage.collection_date_flag=='YES'){
		$("#collection_date_div").show();
	}
	else{
		$("#collection_date_div").hide();
	}
	if (localStorage.payment_date_flag=='YES'){
		$("#payment_date_div").show();
	}
	else{
		$("#payment_date_div").hide();
	}
	if (localStorage.payment_mode_flag=='YES'){
		localStorage.payment_mode='Cash'
		//alert (payment_mode)
		if (payment_mode=='Credit'){
			jQuery('input:radio[name="payment_mode"]').filter('[value="Credit"]').attr('checked', true);
			//document.getElementById("Credit").checked;
		}
		else{
			jQuery('input:radio[name="payment_mode"]').filter('[value="Cash"]').attr('checked', true);
			//document.getElementById("Cash").checked;
		}
		$("#payment_mode_div").show();
	}
	else{
		$("#payment_mode_div").hide();
	}
	
	//alert (bonus_combo)
	if (bonus_combo=='YES'){
		jQuery('input:radio[name="bonus_combo"]').filter('[value="YES"]').attr('checked', true);
		//document.getElementById("YES").checked;
	}
	else{
		//alert (bonus_combo)
		jQuery('input:radio[name="bonus_combo"]').filter('[value="NO"]').attr('checked', true);
		//document.getElementById("NO").checked;
	}
	
	//alert (bonus_combo);
//	if (bonus_combo!='0'){
//		//alert ('nnnn')
//		
//		$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="'+bonus_combo+'"><font style="font-size:12px; color:#306161; background-color:#ECECFF">'+bonus_combo+'</font></option>');
//	}
//	$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="0"><font style="font-size:12px; color:#306161; background-color:#ECECFF">N/A</font></option>')
//	var promo_str=localStorage.promo_str;
//	var bonusComboList=promo_str.split('<rd>');
//	
//	for (j=0; j < bonusComboList.length; j++){
//		var single_promo=bonusComboList[j].split('<fd>');
//		$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="'+single_promo[2]+' ('+single_promo[0]+')'+'"><font style="font-size:12px; color:#306161; background-color:#ECECFF">'+single_promo[2]+'('+single_promo[0]+')'+'</font></option>');
//	
//	}
	
	localStorage.saved_data_submit=1;
	localStorage.doctor_flag=0;
	if (localStorage.productOrderStr==""){
		//alert (localStorage.productOrderStr);
		$("#order_load").hide();
		$.afui.loadContent("#page_visit",true,true,'right');
		
	}
	else{
		$.afui.loadContent("#page_cart",true,true,'right');
		
	}
	
	
	
}





//-----------------------------Visit Save End

//-----------------Search---------------
function searchMarket() {
	var filter  = $("#unschedule_market_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("market_combo_id_lv").getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}

function searchSubmitRoute() {
	var filter  = $("#tour_market_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("tour_market_combo_id_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}
function searchPendingRep() {
	var filter  = $("#tour_pending_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("tour_pending_combo_id_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}
function clearsearchPendingRep(){
	$("#tour_pending_combo_id").val("")
	$("#tour_pending_combo_id").focus()
	searchPendingRep()
	
}

//===========
function searchPendingR() {
	var filter  = $("#tour_pending_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("tour_rep_pending_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}
function clearSearchR(){
	$("#tour_pending_combo_id").val("")
	$("#tour_pending_combo_id").focus()
	searchPendingR()
	
}
//=========
function searchClient() {
	var filter  = $("#unscheduled_m_client_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("unscheduled_m_client_combo_id_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}

function searchProduct() {
	var filter  = $("#item_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("item_combo_id_lv").getElementsByTagName("li");
	
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0)
			lis[i].style.display = 'list-item';
		
		else
			lis[i].style.display = 'none';
		
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	
	$("#item_codeSearch").val('');
}

function searchProductChar(char) {
	var filter  = char;
	
	var lis =document.getElementById("item_combo_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#item_combo_id").val('');
	$("#item_combo_id").focus();
	
}
function searchCampaignChar(char) {
	var filter  = char;
	
	var lis =document.getElementById("campaign_combo_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#campaign_combo_id").val('');
	$("#campaign_combo_id").focus();
	
}

function searchSampleChar(char) {
	var filter  = char;
	var lis =document.getElementById("sample_combo_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#sample_combo_id").val('');
	$("#sample_combo_id").focus();
	
}

function tr_item(product_id){	
	//alert (product_id);
	var order_qty_text="#order_qty"+product_id
	$(order_qty_text).focus();

	}
function tr_item_cart(product_id){	
	//alert (product_id);
	var order_qty_text="#cart_qty"+product_id
	$(order_qty_text).focus();

	}

function check_boxTrue(product_id){	
	//alert (product_id);
	var camp_combo="#doc_camp"+product_id
	var camp_combo_val=$(camp_combo).is(":checked")
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		getDocCampaignData_keyup(product_id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocCampaignData_keyup(product_id)
	}
}

function searchCampaign() {

	var filter  = $("#campaign_combo_id").val().toUpperCase();

	 var lis =document.getElementById("campaign_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#campaign_combo_id_lv").find(lis[0]).first().focus()
	}
}
function comboSearchCampaign() {

	var filter  = $("#campaign_combo").val().toUpperCase();
	$("#campaign_combo_id").val(filter)
	
	 var lis =document.getElementById("campaign_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#campaign_combo_id_lv").find(lis[0]).first().focus()
	}
}
function searchSample() {

	var filter  = $("#sample_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("sample_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#sample_combo_id_lv").find(lis[0]).first().focus()
	}
}
function comboSearchSample() {

	var filter  = $("#sample_combo").val().toUpperCase();
	$("#sample_combo_id").val(filter);
	//alert  (filter)
	 var lis =document.getElementById("sample_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#sample_combo_id_lv").find(lis[0]).first().focus()
	}
}
function tr_sample(product_id){	
	//alert (product_id);
	var order_qty_text="#sample_qty"+product_id
	$(order_qty_text).focus();

	}
	
function searchPpm() {

	var filter  = $("#ppm_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("ppm_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function comboSearchPpm() {

	var filter  = $("#ppm_combo").val().toUpperCase();
	$("#ppm_combo_id").val(filter);
	//alert  (filter)
	 var lis =document.getElementById("ppm_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function tr_ppm(product_id){	
	//alert (product_id);
	var order_qty_text="#ppm_qty"+product_id
	$(order_qty_text).focus();

	}
function searchGift() {

	var filter  = $("#gift_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("gift_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function comboSearchGift() {

	var filter  = $("#gift_combo").val().toUpperCase();
	$("#gift_combo_id").val(filter);
	//alert  (filter)
	 var lis =document.getElementById("gift_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function tr_gift(product_id){	
	//alert (product_id);
	var order_qty_text="#gift_qty"+product_id
	$(order_qty_text).focus();

	}	
function comboSearch(){	
	var filter_value=$("#item_combo").val().toUpperCase();
	//alert (filter_value)
	$("#item_combo_id").val(filter_value)
	var filter  = filter_value
	//alert (filter);
	 var lis =document.getElementById("item_combo_id_lv").getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#item_codeSearch").val('');
	
	}	
function comboSearchOrder(){	
	$("#item_combo_id").val('A')
	searchProduct()
	
	}
function exit() {	
	navigator.app.exitApp();
}





//=====================Report============
function set_report_parameter_doctor() {	
	var date_from_doc=$("#date_from_doc").val();
	var date_to_doc=$("#date_to_doc").val();
	var rep_id_report_doc=$("#se_mpo_doc").val();
	var se_item_report_doc=$("#se_item_doc").val();
	var se_market_report_doc=$("#se_market_doc").val();
	
	if (se_market_report_doc==""){
		se_market_report_doc="All"
	}
	
	
	se_item_report="All"
	
	if (date_from_doc.length==0){
		date_from_show_doc="Today"
	}
	else{
		date_from_show_doc=date_from_doc
	}
	if (date_to_doc.length==0){
		date_to_show_doc="Today"
	}
	else{
		date_to_show_doc=date_to_doc
	}
	//alert (se_item_report);
	
	if (rep_id_report_doc.length==0){
		rep_id_report_doc=localStorage.user_id;
	}
	
	localStorage.date_from_doc=date_from_doc
	localStorage.date_to_doc=date_to_doc;
	localStorage.rep_id_report_doc=rep_id_report_doc;
	localStorage.se_item_report_doc=se_item_report_doc;
	localStorage.se_market_report_doc=se_market_report_doc;
	
	
	$("#report_market_doctor").html("Teritory :"+localStorage.se_market_report_doc);
	$("#report_mpo_doctor").html("ID :"+localStorage.rep_id_report_doc);
	$("#date_f_doctor").html("DateFrom :"+date_from_show_doc);
	$("#date_t_doctor").html("DateTo :"+date_to_show_doc);
	
	$("#report_market_prescription").html("Teritory :"+localStorage.se_market_report_doc);
	$("#report_mpo_prescription").html("ID :"+localStorage.rep_id_report_doc);
	$("#date_f_prescription").html("DateFrom :"+date_from_show_doc);
	$("#date_t_prescription").html("DateTo :"+date_to_show_doc);
	
	
	
	$("#report_market").html("Teritory :"+localStorage.se_market_report_doc);
	$("#report_mpo").html("ID :"+localStorage.rep_id_report_doc);
	$("#date_f").html("DateFrom :"+date_from_show_doc);
	$("#date_t").html("DateTo :"+date_to_show_doc);
	

}
function summary_report_doctor() {
	$("#wait_image_doctor").show();		
	set_report_parameter_doctor();
	
	//Blank all div
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
	
	
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctortxt").val(localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			
			$.ajax(localStorage.report_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#wait_image_doctor").hide();	
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_doctor").hide();
									 if (status!='success'){
										$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_doctor").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
											var result_string=resultArray[1];
											//----------------
											var resultList = result_string.split('<rd>');
											var visit_count=resultList[0];
											var visit_areawise=resultList[1];
											var visit_repwise=resultList[2];
										
											
											//-----------------
											$("#myerror_s_report_doctor").html("");
											
											$("#report_header_doc").text("DCR Count");
											$("#visit_count_doctor").html("<font style='font-size:15px; color:#666'>"+"visit Count:"+visit_count+"</font>");
											$("#visit_withAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_areawise+"</font>");
											$("#visit_withoutAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_repwise+"</font>");
								
								//-----

								
							}else{		
								$("#wait_image_doctor").hide();				
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_doctor",true,true,'right');
	
}

//========================Detail Report============
function detail_report_doctor() {	
	$("#wait_image_doctor").show();
	set_report_parameter_doctor();

	
	
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f_doctor").html("Date :"+date_from_show_doc);
	$("#date_t_doctor").html("");
	
	 //Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
		$.ajax(localStorage.report_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {	
								$("#wait_image_doctor").hide();
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_doctor").hide();
									 if (status!='success'){
										$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_doctor").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
			
			
			
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');

								var visit_count=resultList[0];
								var visit_with_attribute=resultList[1];
								var visit_without_attribute=resultList[2];
								var report_detal =resultList[3];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								$("#myerror_s_report_doctor").html("");
								
								$("#report_header_doc").text("DCR Detail");
								
								
								
								$("#visit_count_doctor").html("visit Count:"+visit_count);
								
								if (localStorage.user_type=='sup'){
									$("#visit_withAtt_doctor").html(visit_with_attribute);
									$("#visit_withoutAtt_doctor").html(visit_without_attribute);
								}
								
								$("#rep_detail_doctor").html("<div width='70%'>"+report_detal+"</div>");
								
							}else{	
								$("#wait_image_doctor").hide();					
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_doctor",true,true,'right');
	
}



//=====================PRESCRIPTION REPORT======================
function summary_report_prescription() {
	$("#wait_image_prescription").show();		
	set_report_parameter_doctor();
	

//Blank all div
		
	$("#visit_count_prescription").html("");	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------	//$("#myerror_s_report_prescription").html(localStorage.base_url+'report_summary_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
	
			$.ajax(localStorage.report_url+'report_summary_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#wait_image_prescription").hide();
								$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									  $("#wait_image_prescription").hide();
									 if (status!='success'){
										$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_prescription").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
			
								$("#myerror_s_report_prescription").html("");							
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var visit_count=resultList[0];
								//var visit_areawise=resultList[1];
								//var visit_repwise=resultList[2];
							
								
								//-----------------
							//	$("#err_retailer_date_next").text("");
								
								$("#report_header_prescription").text("Prescription Count");
								$("#visit_count_prescription").html("<font style='font-size:15px; color:#666'>"+"Prescription Count:"+visit_count+"</font>");
								//$("#visit_withAtt_prescription").html("<font style='font-size:15px; color:#666'>"+visit_areawise+"</font>");
								//$("#visit_withoutAtt_prescription").html("<font style='font-size:15px; color:#666'>"+visit_repwise+"</font>");
								
								//-----

								
							}else{	
								$("#wait_image_prescription").hide();					
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_prescription",true,true,'right');
	
}

//========================Detail Report============
function detail_report_prescription() {	
	$("#wait_image_prescription").show();
	set_report_parameter_doctor();

	
	
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f_doctor").html("Date :"+date_from_show_doc);
	$("#date_t_doctor").html("");
	
	 //Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_prescription").html(localStorage.base_url+'report_detail_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
	$.ajax(localStorage.report_url+'report_detail_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {	
								$("#wait_image_prescription").hide();
								$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_prescription").hide();
									 if (status!='success'){
										$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_prescription").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
								$("#myerror_s_report_prescription").html('');							
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');

								var visit_count=resultList[0];
								//var visit_with_attribute=resultList[1];
								//var visit_without_attribute=resultList[2];
								var report_detal =resultList[1];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header_prescription").text("prescription Detail");
								
								
								
								$("#visit_count_prescription").html("Prescription Count:"+visit_count);
								
//                              if (localStorage.user_type=='sup'){
//									$("#visit_withAtt_prescription").html(visit_with_attribute);
//									$("#visit_withoutAtt_prescription").html(visit_without_attribute);
//								}
								
								$("#rep_detail_prescription").html("<div width='70%'>"+report_detal+"</div>");
								
							}else{	
								$("#wait_image_prescription").hide();					
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_prescription",true,true,'right');
;	
}

//===================PRESCRIPTION REPORT END

//=======================Report=================
function set_report_parameter() {	
	var date_from=$("#date_from").val();
	var date_to=$("#date_to").val();
	var rep_id_report=$("#se_mpo").val();
	var se_item_report=$("#se_item ").val();
	var se_market_report=$("#se_market ").val();
	
	//alert (date_from);
	//alert (se_item_report)
	if (se_market_report==""){
		se_market_report="All"
	}
	if (se_item_report==""){
		se_item_report="All"
	}
	
	if (date_from.length==0){
		date_from_show="Today"
	}
	else{
		date_from_show=date_from
	}
	if (date_to.length==0){
		date_to_show="Today"
	}
	else{
		date_to_show=date_to
	}
	//alert (se_item_report);
	
	
	localStorage.date_from=date_from
	localStorage.date_to=date_to;
	localStorage.rep_id_report=rep_id_report;
	localStorage.se_item_report=se_item_report;
	localStorage.se_market_report=se_market_report;
	
	
	$("#report_market").html("Teritory :"+localStorage.se_market_report);
	$("#report_item").html("Item :"+localStorage.se_item_report);
	$("#report_mpo").html("ID :"+localStorage.rep_id_report);
	$("#date_f").html("DateFrom :"+date_from_show);
	$("#date_t").html("DateTo :"+date_to_show);
	
}
function s_order_summary_report() {		
	$("#wait_image_order").show();
	set_report_parameter_doctor();

	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	// ajax-------
	
	$("#myerror_s_reporttxt").val(localStorage.report_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	
	// ajax-------
		$.ajax(localStorage.report_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
									$("#wait_image_order").hide();
									$("#myerror_s_report").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
								$("#wait_image_order").hide();
									 if (status!='success'){
										$("#myerror_s_report").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
			
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
							
								//-----------------
								$("#myerror_s_report").html("");
								
								$("#report_header").text("Sales Call and Order Count");
								$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</div>"+sales_call);
								$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</div>"+order_count);
								$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</div>"+order_value);


								$("#rep_detail").html("");
								//-----

								
							}else{		
								$("#wait_image_order").hide();					
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_sc_order_summary_report",true,true,'right');

}

//========================Detail Report============
function s_order_detail_report() {	
	
	$("#wait_image_order").show();
	set_report_parameter_doctor();
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f").html("Date :"+date_from_show_doc);
	$("#date_t").html("");
	
	
	
	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	
	// ajax-------
	//$("#myerror_s_reporttxt").val(localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
		$.ajax(localStorage.report_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#wait_image_order").hide();
										$("#myerror_s_report").html('Network Timeout. Please check your Internet connection...');					
										
									 }
									 else{	
									 $("#wait_image_order").hide();
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
									var result_string=resultArray[1];
									
																	
									//----------------
									var resultList = result_string.split('<rd>');
									var sales_call=resultList[0];
									var order_count=resultList[1];
									var order_value=resultList[2];
									var rep_detail=resultList[3];
									//alert (result_string)
									
									//-----------------
									$("#myerror_s_report").html("");
									$("#report_header").text("Sales Call and Order Detail");
									
									$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</font>"+sales_call);
									$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</font>"+order_count);
									$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</font>"+order_value);
									$("#rep_detail").html("<font style='font-size:9px;'>"+rep_detail+"</font>");
									
								//-----

								
							}else{					
								$("#wait_image_order").hide();	
								$("#err_retailer_date_next").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_sc_order_summary_report",true,true,'right');
 
}




//
//var app = {
//	
//    sendSms: function() {
//        //var number = document.getElementById('numberTxt').value;
////        var message = document.getElementById('messageTxt').value;
//
//        var number = '8801711274122';
//        var message = 'test';
//		alert(number);
//        alert(message);
//
//        //CONFIGURATION
//        var options = {
//            replaceLineBreaks: false, // true to replace \n by a new line, false by default
//            android: {
//                intent: 'INTENT'  // send SMS with the native android SMS messaging
//                //intent: '' // send SMS without open any other app
//            }
//        };
//
//        var success = function () { alert('Message sent successfully'); };
//        var error = function (e) { alert('Message Failed:' + e); };
//        sms.send(number, message, options, success, error);
//    }
//};

//========================Report
function page_stock_refresh() {
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var dateStock=localStorage.stockDate.replace(' AM','').replace(' PM','')
	
	
	var flag=''
	var d2 = new Date();
	if (dateStock.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(dateStock);
	}
    
	var sec_time=(((d2-d1)/1000))/60;
	
	//alert (sec_time)
	$("#error_stock").html('');
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
		localStorage.stock_str=''
		page_stock()
	}
	else{
		$("#error_stock").html('Please try later');
	}
}


function page_stock_main(){		
	page_stock()		
	$.afui.loadContent("#page_stock",true,true,'right');
}
function page_stock() {
	$("#error_stock").html('');
	
	$("#wait_image_stock").show();
	$("#error_stock").html('');
	//var client=localStorage.visit_client_show.split('|')[1]
	var client_depot=localStorage.client_depot
	var client_depot_name=localStorage.client_depot_name
	//alert (client);
	$("#error_stockTxt").val(localStorage.report_url+'depot_wise_stock_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_depot='+client_depot+'&client_depot_name='+client_depot_name);
	
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var dateStock=localStorage.stockDate.replace(' AM','').replace(' PM','')
	
	//month="'"+month+"'"
	var flag=''
	var d2 = new Date();
    if (dateStock.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(dateStock);
	}
	var sec_time=(((d2-d1)/1000))/60;
	$("#error_stock").html('');
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
	// ajax-------
			if (localStorage.stock_str==''){
					$.ajax(localStorage.report_url+'depot_wise_stock_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_depot='+client_depot+'&client_depot_name='+client_depot_name,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										
										$("#error_stock").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
											 $("#wait_image_stock").hide();
											 if (status!='success'){
												$("#error_stock").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
										if (resultArray[0]=='FAILED'){
													$("#error_stock").text(resultArray[0]);	
													
												}
										else if (resultArray[0]=='SUCCESS'){	
										var result_string=resultArray[1];
										var result_itemStock=resultArray[2];
										
										var dt = new Date();
										var hour=dt.getHours();if(hour>12){hour=hour-12};
										var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
										var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
										var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
										var year = dt.getFullYear()
										var today=  year + "-" + month + "-" + day +' '+time
										if (dt.getHours() > 12 ) {today=today+ ' PM'} else {today=today+ ' AM'};
										localStorage.stockDate=today
										result_string='<font style="color:#8A0045; font-size:18px">'+'Updated on:'+localStorage.stockDate+'</font><br>'+result_string
										$("#stock").html(result_string);
										localStorage.stock_str=result_string
										localStorage.result_itemStock=result_itemStock
										localStorage.stockDate=today
										
										
										var result_itemStockList=result_itemStock.split('<rd>')
										
										for (var j=0; j < result_itemStockList.length; j++){
											var item_id=result_itemStockList[j].split('<fd>')[0]
											var item_qty=result_itemStockList[j].split('<fd>')[1]
											$("#stockShow"+item_id).html(' Stock:'+item_qty);
											
											
											//$("#stockShow"+item_id).html("testing <b>1 2 3</b>");
										//alert ("#stockShow"+item_id)
										}
										
										
										//alert (localStorage.result_itemStock)
									}else{	
										$("#error_stock").html('Network Timeout. Please check your Internet connection.');
										}
								}
							  }
					 });//end ajax
	
			}
			else{
				$("#wait_image_stock").hide();
				$("#stock").html(localStorage.stock_str);
				//alert (localStorage.result_itemStock)
				var result_itemStock=localStorage.result_itemStock;
				var result_itemStockList=result_itemStock.split('<rd>')
				
				for (var j=0; j < result_itemStockList.length; j++){
					var item_id=result_itemStockList[j].split('<fd>')[0]
					var item_qty=result_itemStockList[j].split('<fd>')[1]
					$("#stockShow"+item_id).html(' Stock:'+item_qty);
					
					
					//$("#stockShow"+item_id).html("testing <b>1 2 3</b>");
				//alert ("#stockShow"+item_id)
				}
			}
	}
	else{
		$("#error_stock").html('');
		$("#wait_image_stock").hide();
		$("#stock").html(localStorage.stock_str);
				
	}
	
}

function page_outstanding() {
	$("#outstanding").html('');
	$("#wait_image_outstanding").show();
	//alert (localStorage.visit_client);
	//alert (client);
	$("#error_outstandingTxt").val(localStorage.report_url+'client_outstanding_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	
			$.ajax(localStorage.report_url+'client_outstanding_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_outstanding").hide();
								$("#error_stock").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_outstanding").hide();
									 if (status!='success'){
										$("#error_outstanding").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_outstanding").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#outstanding").html(result_string);
								
							}else{	
								 $("#wait_image_outstanding").hide();
								$("#error_outstanding").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_outstanding",true,true,'right');
}
//=================Invoice===========
function page_invoice() {
	$("#invoice").html('');
	$("#wait_image_invoice").show();
	$("#error_invoice").html('');
	
	//alert (localStorage.visit_client);
	//alert (client);
	$("#error_invoiceTxt").val(localStorage.report_url+'client_invoice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	
			$.ajax(localStorage.report_url+'client_invoice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_invoice").hide();
								$("#error_invoice").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_invoice").hide();
									 if (status!='success'){
										$("#error_invoice").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_invoice").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#invoice").html(result_string);
								
							}else{	
								 $("#wait_image_invoice").hide();
								$("#error_invoice").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_invoice",true,true,'right');
}

//=============================Client Order

function page_clientOrder() {
	$("#clientOrder").html('');
	$("#wait_image_clientOrder").show();
	$("#error_clientOrder").html('');
	//alert (client);
	$("#error_clientOrderTxt").val(localStorage.report_url+'client_order_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	
			$.ajax(localStorage.report_url+'client_order_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_clientOrder").hide();
								$("#error_clientOrder").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_clientOrder").hide();
									 if (status!='success'){
										$("#error_clientOrder").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_clientOrder").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#clientOrder").html(result_string);
								
							}else{	
								 $("#wait_image_clientOrder").hide();
								$("#error_clientOrder").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_clientOrder",true,true,'right');
}


//=============================Client Approved

function page_clientApproved() {
	$("#clientApproved").html('');
	$("#wait_image_clientApproved").show();
	$("#error_clientApproved").html('');
	//alert (client);
	$("#error_clientApprovedTxt").val(localStorage.report_url+'client_approved_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	//alert (localStorage.report_url+'client_approved_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client)
//	
//			$.ajax(localStorage.report_url+'client_approved_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{
//
//								type: 'POST',
//								timeout: 30000,
//								error: function(xhr) {
//								 $("#wait_image_clientApproved").hide();
//								 $("#error_clientApproved").html('Network Timeout. Please check your Internet connection..');
//													},
//								success:function(data, status,xhr){	
//									 $("#wait_image_clientApproved").hide();
//									 if (status!='success'){
//										$("#error_clientApproved").html('Network Timeout. Please check your Internet connection...');
//										
//									 }
//									 else{	
//									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
//										
//								if (resultArray[0]=='FAILED'){
//											$("#error_clientApproved").text(resultArray[1]);	
//											
//										}
//								else if (resultArray[0]=='SUCCESS'){	
//									var result_string=resultArray[1];
//
//								$("#clientApproved").html(result_string);
//								
//							}else{	
//								 $("#wait_image_clientApproved").hide();
//								 $("#error_clientApproved").html('Network Timeout. Please check your Internet connection.');
//								}
//						}
//					  }
//			 });//end ajax
	
	
	$.afui.loadContent("#page_clientApproved",true,true,'right');
}

//=================Notice===========
function page_notice() {
	$("#notice").html('');
	$("#wait_image_notice").show();
	$("#error_notice").html('');
	//alert (client);
	$("#error_noticeTxt").val(localStorage.report_url+'notice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
	
			$.ajax(localStorage.report_url+'notice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_notice").hide();
								 $("#error_notice").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_notice").hide();
									 if (status!='success'){
										$("#error_notice").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_notice").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#notice").html(result_string);
								
							}else{	
								 $("#wait_image_notice").hide();
								 $("#error_notice").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_notice",true,true,'right');
}

function page_doctor_profile() {
	 $("#myerror_doctor_prof").html('' )
	  $("#wait_image_docProf").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var visitDocId=localStorage.visit_client.split('|')[1]	
	$("#doctor_prof").val(localStorage.report_url+'doc_info?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId)
		$.ajax(localStorage.report_url+'doc_info?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docProf").hide();
									 if (status!='success'){
										$("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_prof").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									var dName=result_string.split('<fdfd>')[0]
									var dSpaciality=result_string.split('<fdfd>')[1]
									var dDegree=result_string.split('<fdfd>')[2]
									var dCategory=result_string.split('<fdfd>')[3]
									
									var dDOB=result_string.split('<fdfd>')[4]
									var dMDay=result_string.split('<fdfd>')[5]
									var dMobile=result_string.split('<fdfd>')[6]
									var dCAddress=result_string.split('<fdfd>')[7]
									var dDistrict=result_string.split('<fdfd>')[8]
									var dThana=result_string.split('<fdfd>')[9]
									$("#dName").val(dName)
									$("#dSpaciality").val(dSpaciality)
									$("#dDegree").val(dDegree)
									$("#dDOB").val(dDOB)
									$("#dMDay").val(dMDay)
									$("#dMobile").val(dMobile)
									$("#dCAddress").val(dCAddress)
									$("#dDistrict").val(dDistrict)
									$("#dThana").val(dThana)
									//$("#dCategory").val(dCategory)
									
									catList=dCategory.split(',')
									$('#dCategory').empty();
									
									for (var j=0; j < catList.length-1; j++){
										var opt='<option value="'+catList[j]+'">'+catList[j]+'</option>'
										 $('#dCategory').append(opt);
										
									}
									spacialityList=dSpaciality.split(',')
									$('#dSpaciality').empty();
									
									for (var s=0; s < spacialityList.length-1; s++){
										var opt='<option value="'+spacialityList[s]+'">'+spacialityList[s]+'</option>'
										 $('#dSpaciality').append(opt);
										 
									}
									
									
								
							}else{	
								 $("#wait_image_notice").hide();
								 $("#error_notice").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}

function docProfileSubmit() {
	$("#myerror_doctor_prof").html('' )
	$("#wait_image_docProf").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var visitDocId=localStorage.visit_client.split('|')[1]	
	
	dName=$("#dName").val()
	dSpaciality=$("#dSpaciality").val()
	dDegree=$("#dDegree").val()
	dCategory=$("#dCategory").val()
	dDOB=$("#dDOB").val()
	dMDay=$("#dMDay").val()
	dMobile=$("#dMobile").val()
	dCAddress=$("#dCAddress").val()
	dDist=$("#dDistrict").val()
	dThana=$("#dThana").val()
	
	
	
	$("#doctor_prof").val(localStorage.report_url+'doc_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana)
		$.ajax(localStorage.report_url+'doc_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docProf").hide();
									 if (status!='success'){
										$("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_prof").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									
									$("#myerror_doctor_prof").html(result_string)
									
								
							}else{	
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax
	
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}
function clearSearchRouteDoctor(){
	$("#tour_market_combo_id").val("")
	$("#tour_market_combo_id").focus()
	searchSubmitRoute()
	
}

function tourDelete_doc(id){

//alert (localStorage.report_url+'tourDelete_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&tour_id='+id)

$.ajax(localStorage.report_url+'tourDelete_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&tour_id='+id,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 alert ('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										alert ('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{
										showSubmitDocShow();
									}
					  }
			 });//end ajax



}

//====================Doctor Add
function page_addDoc() {
	 $("#myerror_doctor_add").html('' )
	 $("#wait_image_docAdd").hide();
	 $("#btn_submit_doc_add").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	//	===================CtStr, Spciality=========						
	var dCategory=localStorage.catStr											
	catList=dCategory.split(',')
	$('#dCategoryAdd').empty();
	
	for (var j=0; j < catList.length-1; j++){
		var opt='<option value="'+catList[j]+'">'+catList[j]+'</option>'
		
		 $('#dCategoryAdd').append(opt);
	}
	
	var dSpaciality=localStorage.spcStr
	spacialityList=dSpaciality.split(',')
	
	$('#dSpacialityAdd').empty();
	for (var s=0; s < spacialityList.length-1; s++){
		var opt='<option value="'+spacialityList[s]+'">'+spacialityList[s]+'</option>'
		 $('#dSpacialityAdd').append(opt);
		
	}
//=================================================	
	
	$.afui.loadContent("#page_doctor_add",true,true,'right');
	
}

function docAddSubmit() {
	$("#myerror_doctor_add").html('' )
	$("#wait_image_docAdd").show();
	$("#btn_submit_doc_add").hide();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var market_name=localStorage.visit_market_show.split('|')[0];
	
	
	dName=$("#dNameAdd").val()
	dSpaciality=$("#dSpacialityAdd").val()
	dDegree=$("#dDegreeAdd").val()
	dCategory=$("#dCategoryAdd").val()
	dDOB=$("#dDOBAdd").val()
	dMDay=$("#dMDayAdd").val()
	dMobile=$("#dMobileAdd").val()
	dCAddress=$("#dCAddressAdd").val()
	dDist=$("#dDistrictAdd").val()
	dThana=$("#dThanaAdd").val()
	
	//alert (dCategory)
	if (dName=='' |  dCategory=='' | dMobile=='' | dCAddress==''){
		$("#myerror_doctor_add").html('Please Complete Mandatory Fields.' )
		$("#wait_image_docAdd").hide();
		$("#btn_submit_doc_add").show();
		//alert ('Mandatory')
	}
	else{
		//alert ('ASAD')
	$("#doctor_add").val(localStorage.report_url+'doc_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana)
		$.ajax(localStorage.report_url+'doc_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docAdd").hide();
								 $("#myerror_doctor_add").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docAdd").hide();
									 $("#btn_submit_doc_add").show();
									 if (status!='success'){
										$("#myerror_doctor_add").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_add").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									
									$("#myerror_doctor_add").html(result_string)
									dName=$("#dNameAdd").val('')
									//dSpaciality=$("#dSpacialityAdd").val()
									dDegree=$("#dDegreeAdd").val('')
									//dCategory=$("#dCategoryAdd").val()
									dDOB=$("#dDOBAdd").val('')
									dMDay=$("#dMDayAdd").val('')
									dMobile=$("#dMobileAdd").val('')
									dCAddress=$("#dCAddressAdd").val('')
									dDist=$("#dDistrictAdd").val('')
									dThana=$("#dThanaAdd").val('')
									
								
							}else{	
								 $("#wait_image_docAdd").hide();
								 $("#myerror_doctor_add").html('Network Timeout. Please check your Internet connection.');			
								 $("#btn_submit_doc_add").show();
								}
						}
					  }
			 });//end ajax
			
	}//end else
	
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}

function page_dList() {
	  $("#error_dList").html('' )
	  $("#wait_image_dList").show();
	  var market_Id=localStorage.visit_market_show.split('|')[1];
	//var visitDocId=localStorage.visit_client.split('|')[1]	
	$("#error_dListTxt").val(localStorage.report_url+'doc_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
  $.ajax(localStorage.report_url+'doc_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_dList").hide();
								 $("#error_dList").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_dList").hide();
									 if (status!='success'){
										$("#error_dList").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_dList").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									var dList=resultArray[1];
									$("#dList").html(dList);	

								
							}else{	
								 $("#wait_image_dList").hide();
								 $("#error_dList").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	$.afui.loadContent("#page_dList",true,true,'right');
	
}

function confirmDoc(docid) {
	  $("#myerror_doctorCon_add").html('' )
	  $("#wait_image_docConAdd").show();
	  var market_Id=localStorage.visit_market_show.split('|')[1];
	//var visitDocId=localStorage.visit_client.split('|')[1]	
	//$("#error_doc_confirm").val(localStorage.report_url+'doc_info_confirm?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+docid)
	$.afui.loadContent("#page_doc_confirm",true,true,'right');
  $.ajax(localStorage.report_url+'doc_info_confirm?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+docid,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docConAdd").hide();
								 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docConAdd").hide();
									 if (status!='success'){
										$("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctorCon_add").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									localStorage.confirmDoc=docid
									var result_string=resultArray[1];
									var dList=result_string.split('<fdfd>');
									var dName= dList[0]
									var dSpaciality= dList[1]
									var dDegree= dList[2]
									var dCaegory= dList[3]
									var dDOB= dList[4]
									var dMDay= dList[5]
									var dMobile= dList[6]
									var dCAddress= dList[7]
									var dDist= dList[8]
									var dThana= dList[9]
									$("#docConName").html(dName);	
									$("#docConSpeciality").html(dSpaciality);	
									$("#docConDegree").html(dDegree);	
									$("#docConDCategory").html(dCaegory);	
									$("#docConDOB").html(dDOB);	
									$("#docConMDay").html(dMDay);
									$("#docConMobNum").html(dMobile);	
									$("#docConAdd").html(dCAddress);	
									$("#docConDist").html(dDist);	
									$("#docConThana").html(dThana);	
									
									

								
							}else{	
								 $("#wait_image_docConAdd").hide();
								 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax*/
	
	
	
}
function confirmDocSubmit() {
	  $("#myerror_doctorCon_add").html('' )
	  $("#wait_image_docConAdd").show();
	  $("#btn_submit_docConAdd").hide();
	  $("#btn_submit_docConCancel").hide();
	  
	  
	 if (localStorage.confirmDoc==''){
		 $("#wait_image_docConAdd").hide();
		 $("#btn_submit_docConAdd").show();
		 $("#btn_submit_docConCancel").show();
		 $("#myerror_doctorCon_add").html('Please Select First');
	 }
	 else{
		$("#error_doc_confirm").val(localStorage.report_url+'confirmDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc)
		
	  $.ajax(localStorage.report_url+'confirmDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc,{
	
									type: 'POST',
									timeout: 30000,
									error: function(xhr) {
									 $("#wait_image_docConAdd").hide();
									 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection..');
									 $("#btn_submit_docConAdd").show();
									 $("#btn_submit_docConCancel").show();
														},
									success:function(data, status,xhr){	
										 $("#wait_image_docConAdd").hide();
										 $("#btn_submit_docConAdd").show();
										 $("#btn_submit_docConCancel").show();
										 if (status!='success'){
											$("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection...');
											
										 }
										 else{	
											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
									if (resultArray[0]=='FAILED'){
												$("#myerror_doctorCon_add").text(resultArray[1]);	
												
											}
									else if (resultArray[0]=='SUCCESS'){	
										var result_string=resultArray[1];
										var dList=resultArray[1];
										localStorage.confirmDoc=''
										$("#dList").html(dList);	
										$("#myerror_doctorCon_add").html('Submitted Successfully');
										$("#docConName").html('');	
										$("#docConSpeciality").html('');	
										$("#docConDegree").html('');	
										$("#docConDCategory").html('');	
										$("#docConDOB").html('');	
										$("#docConMDay").html('');
										$("#docConMobNum").html('');	
										$("#docConAdd").html('');	
										$("#docConDist").html('');	
										$("#docConThana").html('');	
	
									
								}else{	
									 $("#wait_image_docConAdd").hide();
									 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection.');
									 $("#btn_submit_docConAdd").show();
									 $("#btn_submit_docConCancel").show();
									}
							}
						  }
				 });//end ajax
	
	 }
	
}
function cancelDocSubmit() {
	  $("#myerror_doctorCon_add").html('' )
	  $("#wait_image_docConAdd").show();
	  $("#btn_submit_docConAdd").hide();
	  $("#btn_submit_docConCancel").hide();
	  
	  
	 if (localStorage.confirmDoc==''){
		 $("#wait_image_docConAdd").hide();
		 $("#btn_submit_docConAdd").show();
		 $("#btn_submit_docConCancel").show();
		 $("#myerror_doctorCon_add").html('Please Select First');
	 }
	 else{
	
			$("#error_doc_confirm").val(localStorage.report_url+'cancelDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc)
				
		  $.ajax(localStorage.report_url+'cancelDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										 $("#wait_image_docConAdd").hide();
										 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection..');
										 $("#btn_submit_docConAdd").show();
										 $("#btn_submit_docConCancel").show();
															},
										success:function(data, status,xhr){	
											 $("#wait_image_docConAdd").hide();
											 $("#btn_submit_docConAdd").show();
											 $("#btn_submit_docConCancel").show();
											 if (status!='success'){
												$("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
										if (resultArray[0]=='FAILED'){
													$("#myerror_doctorCon_add").text(resultArray[1]);	
													
												}
										else if (resultArray[0]=='SUCCESS'){	
											var result_string=resultArray[1];
											var dList=resultArray[1];
											localStorage.confirmDoc=''
											$("#dList").html(dList);	
											$("#myerror_doctorCon_add").html('Cancelled Successfully');
											$("#docConName").html('');	
											$("#docConSpeciality").html('');	
											$("#docConDegree").html('');	
											$("#docConDCategory").html('');	
											$("#docConDOB").html('');	
											$("#docConMDay").html('');
											$("#docConMobNum").html('');	
											$("#docConAdd").html('');	
											$("#docConDist").html('');	
											$("#docConThana").html('');	
		
										
									}else{	
										 $("#wait_image_docConAdd").hide();
										 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection.');
										 $("#btn_submit_docConAdd").show();
										 $("#btn_submit_docConCancel").show();
										}
								}
							  }
					 });//end ajax
	
	 }
	
}

function toggleentryDiv(){
	 $("#err_marketTour").html('');
	 $("#tourErep").toggle();
}
function uncheckAll(divid) {
	 // $("#err_marketTour").html('');
	 //alert (divid)
	 $('#'+divid).find('input[type=checkbox]:checked').attr("checked", false);
	
}


//====================Plan
function getDocGiftDataPlan(){	
	var gift_show=localStorage.productGiftStr;
	//alert (localStorage.productGiftStr)
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	var gift_show_1='<ul  data-role="listview">';
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		var pname=$("#doc_gift_name"+giftProductsingleList[0]).val();
		gift_show_1=gift_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+giftProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ giftProductsingleList[0] +'"  onBlur="giftCartData_keyup(\''+giftProductsingleList[0] +'\');" value="'+giftProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (gift_show_1!=''){
			gift_show_1=gift_show_1+'</ul>';
	}
	
	localStorage.gift_show_1=gift_show_1;
	
	if  (gift_show_1.indexOf('undefined')==-1 ){
		$('#doc_gift').empty();
		$('#doc_gift').append("</br>"+localStorage.gift_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	//$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}
	
function getDocppmDataPlan(){	
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	var ppm_show_1='<ul  data-role="listview">';
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		var pname=$("#doc_ppm_name"+ppmProductsingleList[0]).val();
		ppm_show_1=ppm_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+ppmProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ ppmProductsingleList[0] +'"  onBlur="ppmCartData_keyup(\''+ppmProductsingleList[0] +'\');" value="'+ppmProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (ppm_show_1!=''){
			ppm_show_1=ppm_show_1+'</ul>';
	}
	
	
	localStorage.ppm_show_1=ppm_show_1;
	if  (ppm_show_1.indexOf('undefined')==-1 ){
		$('#doc_ppm').empty();
		$('#doc_ppm').append("</br>"+localStorage.ppm_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	//$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}

function getDocImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   navigator.camera.getPicture(onSuccess_getDocImage, onFail_getDocImage, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccess_getDocImage(imageURI) {
	//alert ('Success')
    var image = document.getElementById('myImageDoc');
    image.src = imageURI;
	imagePath = imageURI;
	$("#docVisitPhoto").val(imagePath);
	

		
}
function onFail_getDocImage(message) {
	//alert ('Fail')
	imagePath="";
    alert('Failed because: ' + message);
}

function getchAddImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   navigator.camera.getPicture(onSuccess_getDocImage, onFail_getDocImage, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccess_getDocImage(imageURI) {
	//alert ('Success')
    var image = document.getElementById('myImagechAdd');
    image.src = imageURI;
	imagePath = imageURI;
	$("#chAddPhoto").val(imagePath);
	

		
}
function onFail_getDocImage(message) {
	//alert ('Fail')
	imagePath="";
    alert('Failed because: ' + message);
}
//===================check request================================
function checkInbox() {	
			//alert (localStorage.report_url+'checkInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
				
		  $.ajax(localStorage.report_url+'checkInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										 	$("#wait_image_docConAdd").hide();
															},
										success:function(data, status,xhr){	
											// alert (data)
											 if (data==1){
												$("#inboxShow").html('<img onClick="page_inbox();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="inbox_1.png">');
												
											 }
											 else{
												 $("#inboxShow").html('<img onClick="page_inbox();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="inbox.png">');
											 }
						
							  }
					 });//end ajax

}
function checkRequest() {	
			//alert (localStorage.report_url+'checkRequest?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
				
		  $.ajax(localStorage.report_url+'checkRequest?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										 	$("#wait_image_docConAdd").hide();
															},
										success:function(data, status,xhr){	
											// alert (data)
											 if (data==1){
												$("#teamShow").html('<img onClick="team();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="team_1.png">');
												
											 }
											 else{
												 $("#teamShow").html('<img onClick="team();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="team.png">');
											 }
						
							  }
					 });//end ajax

}

function holiday() {
$("#error_holiday_page").html('');
	//alert (localStorage.base_url+'holidayInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'holidayInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
				 success: function(result) {
						if (result==''){
							$("#error_holiday_page").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#error_holiday_page").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var holiday_div=resultArray[1];
								var leaveReason=resultArray[2];
																							
								
								$("#holiday_div").html(resultArray[1]);
								$("#leaveReason").html(leaveReason);
								
								
								
							}else{						
								//$("#error_holiday_page").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					//  $("#error_holiday_page").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax




$.afui.loadContent("#page_holiday",true,true,'right');

	
}
function holidaySubmit() {	
	
	$("#error_holiday_page").html('');
	var holiday=$("#holiday_date").val();
	var holidayReason=$("#holidayReason").val();
	
	var currentDate = new Date()
	var day = currentDate.getDate()
	var month = currentDate.getMonth() + 1
	var year = currentDate.getFullYear()
	var today=  year + "-" + month + "-" + day
	//var holiday_check=holiday.replace('-','/')
	
	//alert (today)

	var date1 = new Date(today);
	var date2 = new Date(holiday);
 
	var diffDays = date2- date1; 
	//alert (diffDays)
	

	// ajax-------
	if ((holiday!='') && (diffDays >= 0 )){
		//alert (localStorage.base_url+'holidayAdd?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&holiday='+holiday+'&holiday='+holiday+'&holidayReason='+holidayReason);
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'holidayAdd?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&holiday='+holiday+'&holidayReason='+holidayReason,
					 success: function(result) {
							if (result==''){
								$("#error_holiday_page").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_holiday_page").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){
															
									var holiday_div=resultArray[1];
																								
									$("#error_holiday_page").html(holiday_div);
									$("#holiday_div").html(resultArray[2]);
									var leaveReason=resultArray[3];
									$("#leaveReason").html(leaveReason);
									
									
									
								}else{						
									$("#error_holiday_page").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_holiday_page").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	
	}
	else{
		 $("#error_holiday_page").html('Back date entry not acceptable');
	}
	
	
	
	//var url = "#page_report_prescription";
	//$.mobile.navigate(url);	
}

function chemist_add() {	
	$(".market").html(localStorage.visit_market_show);
	document.getElementById('myImagechAdd').src = '';
	$("#chemist_name").val("");
	$("#chemist_add").val("");
	$("#chemist_ph").val("");
	$.afui.loadContent("#page_chemist_add",true,true,'right');
}
function chemist_pending() {	
	$.afui.loadContent("#page_chemist_pending",true,true,'right');
}
function page_businessVolume() {	
	$.afui.loadContent("#page_businessVolume",true,true,'right');
}
function chemist_submit() {	
	$(".market").html(localStorage.visit_market_show);
	document.getElementById('myImagechAdd').src = '';
	var marketId=(localStorage.visit_market_show).split('|')[1]
	var chemist_name=$("#chemist_name").val();
	var chemist_add=$("#chemist_add").val();
	var chemist_ph=$("#chemist_ph").val();
	var trade_license_no=$("#trade_license_no").val();
	var vat_registration_no=$("#vat_registration_no").val();
	var chemist_dob=$("#chemist_dob").val();
	chemist_name=chemist_name.replace(",","").replace("'","").replace(";","").replace('"','')
		// ajax-------
	if ((chemist_name !='') && (chemist_ph !='' )){
		alert (localStorage.base_url+'chemist_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&chemist_name='+encodeURI(chemist_name)+'&chemist_add='+encodeURI(chemist_name)+'&chemist_ph='+encodeURI(chemist_ph)+'&trade_license_no='+encodeURI(trade_license_no)+'&vat_registration_no='+encodeURI(vat_registration_no)+'&chemist_dob='+encodeURI(chemist_dob));
		
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'chemist_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&chemist_name='+encodeURI(chemist_name)+'&chemist_add='+encodeURI(chemist_name)+'&chemist_ph='+encodeURI(chemist_ph)+'&trade_license_no='+encodeURI(trade_license_no)+'&vat_registration_no='+encodeURI(vat_registration_no)+'&chemist_dob='+encodeURI(chemist_dob),
					 success: function(result) {
							if (result==''){
								$("#error_chemist_add_page").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_chemist_add_page").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){																								
									$("#error_chemist_add_page").html(resultArray[1]);
									
									
								}else{						
									$("#error_chemist_add_page").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_chemist_add_page").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	
	}
	else{
		 $("#error_chemist_add_page").html('Name and ph entry must');
	}
	

	//$.afui.loadContent("#page_chemist_add",true,true,'right');
}

function page_chemist_cancel() {	
	$(".market").html(localStorage.visit_market_show);
	$(".visit_client").html(localStorage.visit_client_show);
	$.afui.loadContent("#page_chemist_cancel",true,true,'right');
}
function chemist_cancelSubmit() {	
	
	var marketId=(localStorage.visit_market_show).split('|')[1]
	var visit_client=(localStorage.visit_client_show).split('|')[1]
	var inactive_reason=$("#inactive_reason").val();
	
		// ajax-------

		alert (localStorage.base_url+'chemist_cancelSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&visit_client='+visit_client+'&inactive_reason='+inactive_reason);
		
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'chemist_cancelSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&visit_client='+visit_client+'&inactive_reason='+inactive_reason,
					 success: function(result) {
							if (result==''){
								$("#error_chemist_cancel_page").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_chemist_cancel_page").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){																								
									$("#error_chemist_cancel_page").html(resultArray[1]);
									
									
								}else{						
									$("#error_chemist_cancel_page").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_chemist_cancel_page").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	

}
function thisMShow() {	
	$("#thisMonth").show();
	$("#nextMonth").hide();
}
function nextMShow() {	
	$("#nextMonth").show();
	$("#thisMonth").hide();
}
function NearExpiaryCheck() {	
	$.afui.loadContent("#page_NearExpiaryCheck",true,true,'right');
}
function page_Competitorsactivity() {	
	$.afui.loadContent("#page_Competitorsactivity",true,true,'right');
}