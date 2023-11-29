import { error } from '@sveltejs/kit';

interface ProcedureData {
    [key: string]: {
        title: string,
        content: Array<string|Array<string>>,
        metaDescription: string|null,
    },
}

const defaultDescription = "Looking for details on what care you'll be receiving? Browse our most common procedures to get the information you need."

/** @type {import('./$types').PageLoad} */
export function load(data:{ params:any }) {
    if (procedureData[data.params.instruction]) {
        let returnObject = {
            title: procedureData[data.params.instruction].title,
            metaDescription: procedureData[data.params.instruction].metaDescription || procedureData[data.params.instruction].content.find(a=>typeof a === "string") || defaultDescription,
            content: "",
        }
        procedureData[data.params.instruction].content.forEach(section=>{
            if (typeof section === "string") {
                returnObject.content += `<p>${section}</p>`
            } else {
                // It's an array. Make it into a <ul>
                returnObject.content += `<ul>`
                section.forEach(item=>{
                    returnObject.content += `<li>${item}</li>`
                })
                returnObject.content += `</ul>`
            }
        })
        return returnObject
    }
    throw error(404, 'Not found');
}

/* 

*/
const procedureData:ProcedureData = {
    "dental-extraction":
        {
            title: "Dental Extraction",
            metaDescription: null, // Returns first line of content.
            content: [
                `The procedure will take place in the dental office or hospital dental clinic. It may involve removing one or more teeth. You may be asked to take antibiotics before the procedure.`,
                `You will get a local anesthetic to numb the area around the tooth so you do not feel pain. Your dentist may loosen the tooth in the gum using a tooth removal instrument called an elevator. Your dentist will then place forceps around the tooth and pull the tooth out from the gum. If you need a more complex tooth extraction:`,
                `You may be given sedation so you are relaxed and asleep, as well as an anesthetic so you are pain-free. The surgeon may need to remove several teeth using the methods above. For an impacted tooth, the surgeon may have to cut a flap of gum tissue and remove some surrounding bone. The tooth will be removed with forceps. If it is hard to remove, the tooth may be sectioned (broken) into pieces. After your tooth is removed:`,
                `Your dentist will clean out the gum socket and smooth out the bone that is left. The gum may need to be closed with one or more stitches, also called sutures. You will be asked to bite down on a damp piece of gauze to stop the bleeding.`,
            ]
        },
    "wisdom-teeth-extraction":
        {
            title: "Wisdom Teeth Extraction",
            metaDescription: null, // Returns first line of content.
            content: [
                `Teeth start to pass through the gums (emerge) during infancy. This happens again when permanent teeth replace the primary (baby) teeth.`,
                `If a tooth does not come in, or emerges only partially, it is considered to be impacted. This most commonly happens with the wisdom teeth (the third set of molars). They are the last teeth to erupt. They usually come in between the ages of 17 and 21.`,
                `An impacted tooth remains stuck in gum tissue or bone for various reasons. The area may be overcrowded, leaving no room for the teeth to emerge. For example, the jaw may be too small to fit the wisdom teeth. Teeth may also become twisted, tilted, or displaced as they try to emerge. This results in impacted teeth.`,
                `Impacted wisdom teeth are very common. They are often painless and do not cause problems. However, some professionals believe an impacted tooth pushes on the next tooth, which pushes the next tooth. Eventually, this can cause a misaligned bite. A partially emerged tooth can trap food, plaque, and other debris in the soft tissue around it, which can lead to inflammation and tenderness of the gums and unpleasant mouth odor. This is called pericoronitis. The retained debris may also lead to the decay on the wisdom tooth or the neighboring tooth, or even bone loss.`,
            ]
        },
    "dental-implants":
        {
            title: "Dental Implants",
            metaDescription: null, // Returns first line of content.
            content: [
                `Every day, people around you are getting dental implants to replace missing teeth. Dental implants are surgically placed into your jawbone. They are a long-term solution to missing teeth (edentulism) and can be very similar to your natural teeth. Plus, unlike fixed bridges or removable dentures, dental implants likely will not affect neighboring healthy teeth or lead to bone loss in the jaw. If properly cared for, dental implants can last a lifetime.`,
                `Dental implant surgery is, of course, surgery – and is best performed by a trained surgeon. Your oral and maxillofacial surgeon (OMS) has the specialized education and training in the complexities of the bone, soft-tissue and nerves involved to ensure you get the best possible results.`,
            ]
        },
    "oral-tumors-and-cancer":
        {
            title: "Oral Tumors/Cancer",
            metaDescription: null, // Returns first line of content.
            content: [
                `Oral cancer can form in any part of the mouth. Most oral cancers begin in the flat cells that cover the surfaces of your mouth, tongue, and lips. Anyone can get oral cancer, but the risk is higher if you are male, use tobacco, drink lots of alcohol, have HPV, or have a history of head or neck cancer. Frequent sun exposure is also a risk factor for lip cancer.`,
                `Symptoms of oral cancer include :`,
                [
                    `White or red patches in your mouth`,
                    `A mouth sore that won't heal`,
                    `Bleeding in your mouth`,
                    `Loose teeth`,
                    `Problems or pain with swallowing`,
                    `A lump in your neck`,
                    `An earache`,
                ],
                `Tests to diagnose oral cancer include a physical exam, endoscopy, biopsy, and imaging tests. Oral cancer treatments may include surgery, radiation therapy, and chemotherapy. Some patients have a combination of treatments.`,
            ]
        },
    "tmj-surgery":
        {
            title: "TMJ Surgery",
            metaDescription: null, // Returns first line of content.
            content: [
                `The temporomandibular joint (TMJ) connects your jaw to the side of your head. When it works well, it enables you to talk, chew, and yawn. For people with TMJ dysfunction, problems with the joint and muscles around it may cause :`,
                [
                    `Pain that travels through the face, jaw, or neck`,
                    `Stiff jaw muscles`,
                    `Limited movement or locking of the jaw`,
                    `Painful clicking or popping in the jaw`,
                    `A change in the way the upper and lower teeth fit together`,
                ],
                `Jaw pain may go away with little or no treatment. Treatment may include simple things you can do yourself, such as eating soft foods or applying ice packs. It may also include pain medicines or devices to insert in your mouth. In very rare cases, you might need surgery.`,
            ]
        },
    "sleep-apnea":
        {
            title: "Sleep Apnea",
            metaDescription: null, // Returns first line of content.
            content: [
                `Sleep apnea is a common disorder that causes your breathing to stop or get very shallow. Breathing pauses can last from a few seconds to minutes. They may occur 30 times or more an hour.`,
                `The most common type is obstructive sleep apnea. It causes your airway to collapse or become blocked during sleep. Normal breathing starts again with a snort or choking sound. People with sleep apnea often snore loudly. However, not everyone who snores has sleep apnea.`,
                `You are more at risk for sleep apnea if you are overweight, male, or have a family history or small airways. Children with enlarged tonsils or adenoids may also get it.`,
                `Doctors diagnose sleep apnea based on medical and family histories, a physical exam, and sleep study results.`,
                `When your sleep is interrupted throughout the night, you can be drowsy during the day. People with sleep apnea are at higher risk for car crashes, work-related accidents, and other medical problems. If you have it, it is important to get treatment. Lifestyle changes, mouthpieces, surgery, and breathing devices can treat sleep apnea in many people.`,
            ]
        },
    "botox-injections-cosmetic-and-medical":
        {
            title: "Botox Injections (Cosmetic and Medical)",
            metaDescription: null, // Returns first line of content.
            content: [
                `Botox is a drug made from a toxin produced by the bacterium Clostridium botulinum. It's the same toxin that causes a life-threatening type of food poisoning called botulism. Doctors use it in small doses to treat health problems, including:`,
                [
                    `Temporary smoothing of facial wrinkles and improving your appearance`,
                    `Severe underarm sweating`,
                    `Cervical dystonia - a neurological disorder that causes severe neck and shoulder muscle contractions`,
                    `Blepharospasm - uncontrollable blinking`,
                    `Strabismus - misaligned eyes`,
                    `Chronic migraine`,
                    `Overactive bladder`,
                ],
                `Botox injections work by weakening or paralyzing certain muscles or by blocking certain nerves. The effects last about three to twelve months, depending on what you are treating. The most common side effects are pain, swelling, or bruising at the injection site. You could also have flu-like symptoms, headache, and upset stomach. Injections in the face may also cause temporary drooping eyelids. You should not use Botox if you are pregnant or breastfeeding.`,
            ]
        },
    "cosmetic-fillers":
        {
            title: "Cosmetic Fillers",
            metaDescription: null, // Returns first line of content.
            content: [
                `Dermal fillers, also known as injectable implants, soft tissue fillers, lip and facial fillers, or wrinkle fillers are medical device implants approved by the FDA for use in helping to create a smoother and/or fuller appearance in the face, including nasolabial folds (the lines extending from the sides of the nose to the edges of the mouth), cheeks, chin, lips, and back of the hands.`,
                `Since some dermal fillers are naturally absorbed over time, patients may need to repeat the procedure after some time to maintain the desired effect. Successful results will depend on the underlying tissue structure and the volume and type of filler used. The time that the effect lasts depends on the filler material and the area where it is injected.`,
            ]
        },
    "scar-revision":
        {
            title: "Scar Revision",
            metaDescription: null, // Returns first line of content.
            content: [
                `Scar revision is surgery to improve or reduce the appearance of scars. It also restores function, and corrects skin changes (disfigurement) caused by an injury, wound, poor healing, or previous surgery.`,
                `Scar tissue forms as skin heals after an injury (such as an accident) or surgery.`,
                `How much scarring there is depends on:`,
                [
                    `Size, depth, and location of the wound`,
                    `Your age`,
                    `Skin characteristics, such as color (pigmentation)`,
                    `Depending on the extent of the surgery, scar revision can be done while you are awake (local anesthesia), sleeping (sedated), or deep asleep and pain-free (general anesthesia).`,
                ],
                `When to have scar revision done is not always clear. Scars shrink and become less noticeable as they age. You may be able to wait to have surgery until the scar lightens in color. This can be several months or even a year after the wound has healed. For some scars, it is best to have revision surgery 60 to 90 days after the scar matures or longer. Each scar is different.`,
            ]
        },
    "jaw-alignment-surgery":
        {
            title: "Jaw Alignment Surgery",
            metaDescription: null, // Returns first line of content.
            content: [
                `Your jaw is a set of bones that holds your teeth. It consists of two main parts. The upper part is the maxilla. It doesn't move. The moveable lower part is called the mandible. You move it when you talk or chew. The two halves of the mandible meet at your chin. The joint where the mandible meets your skull is the temporomandibular joint.`,
                `Jaw problems include:`,
                [
                    `Fractures (broken bones)`,
                    `Dislocations`,
                    `Temporomandibular joint dysfunction`,
                    `Osteonecrosis, which happens when your bones lose their blood supply`,
                    `Cancers`,
                ],
                `Treatment of jaw problems depends on the cause.`,
            ]
        },
    "cleft-lip-and-palate-surgery":
        {
            title: "Cleft Lip and Palate Surgery",
            metaDescription: null, // Returns first line of content.
            content: [
                `Cleft lip and cleft palate are birth defects that occur when a baby's lip or mouth do not form properly. They happen early during pregnancy. A baby can have a cleft lip, a cleft palate, or both.`,
                `A cleft lip happens if the tissue that makes up the lip does not join completely before birth. This causes an opening in the upper lip. The opening can be a small slit or a large opening that goes through the lip into the nose. It can be on one or both sides of the lip or, rarely, in the middle of the lip.`,
                `Children with a cleft lip also can have a cleft palate. The roof of the mouth is called the "palate." With a cleft palate, the tissue that makes up the roof of the mouth does not join correctly. Babies may have both the front and back parts of the palate open, or they may have only one part open.`,
                `Children with a cleft lip or a cleft palate often have problems with feeding and talking. They also might have ear infections, hearing loss, and problems with their teeth.`,
                `Often, surgery can close the lip and palate. Cleft lip surgery is usually done before age 12 months, and cleft palate surgery is done before 18 months. Many children have other complications. They may need additional surgeries, dental and orthodontic care, and speech therapy as they get older. With treatment, most children with clefts do well and lead a healthy life.`,
            ]
        },
    "facial-trauma-repair":
        {
            title: "Facial Trauma Repair",
            metaDescription: null, // Returns first line of content.
            content: [
                `Facial injuries can affect the upper jaw, lower jaw, cheek, nose, eye socket, or forehead. They may be caused by blunt force or be the result of a wound.`,
                `Common causes of injury to the face include:`,
                [
                    `Car and motorcycle crashes`,
                    `Wounds`,
                    `Sports injuries`,
                    `Violence`,
                ],
                `Surgery is done if the injury prevents normal functioning or causes a major deformity. Most people do very well with proper treatment. More surgery may be needed in 6 to 12 months to correct changes in appearance.`,
            ]
        },
}
 