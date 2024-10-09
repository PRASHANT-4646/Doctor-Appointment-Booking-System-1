document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const doctorsList = document.getElementById('doctors');
    const doctorProfile = document.getElementById('doctor-profile');
    const profileDetails = document.getElementById('profile-details');
    const bookAppointmentBtn = document.getElementById('book-appointment-btn');
    const appointmentBooking = document.getElementById('appointment-booking');
    const bookingForm = document.getElementById('booking-form');
    const manageAppointments = document.getElementById('manage-appointments');
    const appointmentsList = document.getElementById('appointments-list');
    let selectedDoctor = null;

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        doctorsList.innerHTML = '';
        const doctors = [
            {
                id: 1,
                name: 'Dr.Mahesh',
                specialty: 'Gastroenterologist',
                location: 'Noida',
                qualifications: 'MD, PhD',
                reviews: '4.5/5', 
            },
            {
                id: 2,
                name: 'Dr.Ayushi',
                specialty: 'Gastroenterologist',
                location: 'Noida',
                qualifications: 'MD,MBBS',
                reviews: '4.5/5',  
            },
            {
                id: 3,
                name: 'Dr. Prashant',
                specialty: 'Gastroenterologist',
                location: 'Noida',
                qualifications: 'MD,MBBS',
                reviews: '4.1/5',          
               
            },
            {
                id: 4,
                name: 'Dr.Rajneesh',
                specialty: 'Cardiology',
                location: 'Noida',
                qualifications: 'MD, PhD',
                reviews: '4.6/5',
             
            },
            {
                id: 2,
                name: 'Dr.Puja',
                specialty: 'Cardiology',
                location: 'Noida',
                qualifications: 'MD,MBBS',
                reviews: '4.5/5',
             
            },
            {
                id: 3,
                name: 'Dr. Mainsh',
                specialty: 'dentist',
                location: 'Noida',
                qualifications: 'MD,MBBS',
                reviews: '4.1/5',
               
               
            }
            
       ];

        doctors.forEach(doctor => {
            const li = document.createElement('li');
            li.textContent = `${doctor.name} - ${doctor.specialty}`;
            li.addEventListener('click', () => {
                selectedDoctor = doctor;
                showDoctorProfile(doctor);
            });
            doctorsList.appendChild(li);
        });
    });

    function showDoctorProfile(doctor) {
        doctorProfile.style.display = 'block';
        profileDetails.innerHTML = `
            <p><strong>Name:</strong> ${doctor.name}</p>
            <p><strong>Specialty:</strong> ${doctor.specialty}</p>
            <p><strong>Location:</strong> ${doctor.location}</p>
            <p><strong>Reviews:</strong> ${doctor.reviews}</p>
            <p><strong>Available Slots:</strong></p>
            <ul>
                <li>09:00 AM - 10:00 AM</li>
                <li>10:00 AM - 11:00 AM</li>
                <li>11:00 AM - 12:00 PM</li>
            </ul>
        `;
        appointmentBooking.style.display = 'block';
    }

    bookAppointmentBtn.addEventListener('click', () => {
        appointmentBooking.style.display = 'block';
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const time = document.getElementById('appointment-time').value;
        if (selectedDoctor && time) {
            //  booking the appointment
            const li = document.createElement('li');
            li.textContent = `Appointment with ${selectedDoctor.name} at ${time}`;
            appointmentsList.appendChild(li);
            alert('Appointment booked successfully!');
            // Reset  sections
            bookingForm.reset();
            appointmentBooking.style.display = 'none';
        }
    });
});
