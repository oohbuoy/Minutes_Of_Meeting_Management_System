// Live meeting data - Digital Public Infrastructure Strategy
const liveMeetings = [
    {
        id: 'dpi-strategy-070725',
        filename: 'Minutes_of_the_Meeting_03072025.xlsx',
        upload_date: '2025-07-07T10:30:00Z',
        record_count: 7,
        title: 'DIGITAL PUBLIC INFRASTRUCTURE STRATEGY',
        subtitle: 'Netweb Technologies India Ltd. & Infosys Collaboration | 7 July 2025'
    }
];

const liveMeetingData = {
    'dpi-strategy-070725': {
        meeting: {
            id: 'dpi-strategy-070725',
            filename: 'Minutes_of_the_Meeting_03072025.xlsx',
            upload_date: '2025-07-07T10:30:00Z',
            title: 'DIGITAL PUBLIC INFRASTRUCTURE STRATEGY',
            subtitle: 'Netweb Technologies India Ltd. & Infosys Collaboration | 7 July 2025',
            description: 'On 7 July 2025 Netweb convened its core expert team to explore the future of Digital Public Infrastructure with energy and optimism. Swastik Sir opened the session by painting a compelling vision for secure, scalable and user-centric digital services. Sanjay Sir offered encouragement and strategic perspective, setting the tone for an engaged, solution-oriented dialogue. Mukesh Sir and Vivek Sir joined alongside Infosys collaborators to weave together four complementary themes into a unified roadmap.'
        },
        data: [
            {
                description: 'Digital Public Infrastructure: Deployment for Governments: Government Business - A project highlights refers to foundational, interoperable digital systems and platforms that enable essential public and private services at population scale. Systems that provide individuals with a verifiable and unique digital identity. Sri Lanka is actively advancing its Digital Public Infrastructure (DPI) initiatives, with significant developments in digital identity and payment systems. Target Countries: Sri Lanka, Indonesia, Philippines, East Europe, Middle East and Africa. Highlights of a Specific project: Sri Lanka Unique Digital Identity (SL-UDI) Project - Objective: Establish a foundational digital identity system to enhance access to public and private services. Platform: Utilizes the Modular Open-Source Identity Platform (MOSIP), developed in India. Procurement: The Government of India, through the National Institute for Smart Government (NISG), has issued a Request for Proposals (RFP) on behalf of Sri Lanka to select a Master System Integrator (MSI) for the SL-UDI project. Timeline: Pre-qualification bids: Due by August 8, 2025, Technical and financial bids: Due by October 8, 2025. Eligibility: Open to Indian companies with proven technical and financial capabilities. Next Steps: Post-RFP, a digital ID sandbox is expected to launch within 3–4 months, allowing stakeholders to engage with and assess the open digital ID platform.',
                actionItems: 'MOSIP certification for Netweb HARDWARE',
                actionOwnership: 'Swastik, Vivek',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Plan to meet Prof Das on 10th July'
            },
            {
                description: 'Center of Excellence for testing and qualifying DPI software and Network. Build a Latest Configuration of Skylus setup at Infosys Hubli Campus with 6 Numbers of Cloud Node and 2 Number of Compute Nodes each with 2 Numbers of H200 NVL GPU with 3 Cloud Controllers and related Switches and Racks for Cloud IN a Rack Solution',
                actionItems: 'Center of Excellence for testing and qualifying DPI software and Network. Build a Latest Configuration of Skylus setup at Infosys Hubli Campus with 6 Numbers of Cloud Node and 2 Number of Compute Nodes each with 2 Numbers of H200 NVL GPU with 3 Cloud Controllers and related Switches and Racks for Cloud IN a Rack Solution',
                actionOwnership: 'Mukesh, Swastik, Sanjay',
                startDate: '2025-07-07',
                endDate: '2025-09-07',
                remarks: ''
            },
            {
                description: 'Joint Solution Architecture Development - Collaborative development between Infosys and Netweb Technologies for comprehensive DPI solutions',
                actionItems: 'Joint Solution Architecture Development',
                actionOwnership: 'Infosys, Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            },
            {
                description: 'Providing access to Bangalore Skylus Cluster for increasing familiarity of Skylus platform and enhancing team capabilities',
                actionItems: 'Providing access to Bangalore Skylus Cluster for increasing familiarity of Skylus',
                actionOwnership: 'Swastik',
                startDate: '2025-07-07',
                endDate: '2025-07-07',
                remarks: 'MAIL Initiated on 07072025'
            },
            {
                description: 'Digital Public Infrastructure: Consumption of Service: Business Network Builder - Designing a DPI Consumer Architecture involves creating a structured framework that allows users, platforms, and institutions to seamlessly consume services offered by Digital Public Infrastructure (DPI). A well-architected DPI consumer system should ensure interoperability, modularity, scalability, security, and privacy by design. The idea is to build the network and allowing Enterprises to build solutions to leverage the power of the network. One such example for education vertical can be imagined to deliver the following: Learner Journey - Login with Aadhaar Equivalent/mobile (User authentication, verified profiles), Browse DIKSHA/ONEST (Content discovery and delivery) content for a career path (e.g., Web Developer), Take online courses and assessments (Payment for certification, internships, job applications), Earn verified credentials pushed to DigiLocker(Credential storage and verification)/ABC (Academic Bank of Credit), Explore job listings on ONDC (Job discovery and matchmaking) via job portal integration, Apply with verified profile + credits + assessments. Employer Journey - Login and verify company, Post job roles (mapped to NSQF/job codes) (National Skills Qualifications Framework (NSQF)), View matching candidates with verified skills/certificates, Schedule interviews via portal, Give job offers that trigger automated tracking',
                actionItems: 'Joint Solution Development',
                actionOwnership: 'Infosys + Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            },
            {
                description: 'Digital Public Infrastructure: Consumption of Service: Enterprise Consuming the NETWORK - Enterprises are building business models that leverage Digital Public Infrastructure (DPI) — specifically from the lens of enterprises consuming DPI as a network service layer. These models are relevant across sectors like finance, education, commerce, healthcare, and mobility. Enterprises plug into DPI layers (like identity, payments, data sharing, or commerce protocols) to offer services without building foundational infrastructure themselves. Instead, they consume shared, government-backed or community-managed infrastructure to: Reduce costs, Accelerate go-to-market, Focus on innovation at the service layer, Core DPI Layers Enterprises. The core DPI services offered includes Identity (Identity verification, document access), Payments (Seamless payment integration), Consent/Data (Consent-based data sharing (finance, health, education)), Commerce (Product discovery, order fulfillment), Skilling/Education (Course content, credit verification, certification) Mobility (Booking and routing in federated transit systems). Examples Include: 1) Fintechs via Account Aggregator + UPI - LendingKart, KreditBee, INDmoney, and others use AA+eKYC+DPI to offer instant credit products. 2) EdTechs via ONEST + NAD + ABC - An EdTech startup builds an app that pulls skilling modules from ONEST, verifies completion via ABC, and generates DigiLocker-stored certificates. 3) eCommerce Platforms via ONDC - Magicpin, SellerApp, Snapdeal, and others join ONDC as buyer/seller apps, Retail ERP companies integrate ONDC APIs for catalog sync and payment processing. 4) Mobility Startups via Beckn Protocol (e.g., Namma Yatri) - Juspay\'s Namma Yatri allows drivers and passengers to match and transact without a central aggregator, Local mobility startups build services on Beckn and plug into ONDC for payments/logistics.',
                actionItems: 'Joint Solution Development',
                actionOwnership: 'Infosys + Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            },
            {
                description: 'DPI centric WORKLOAD Characteristics and Optimization - To drive optimum workload performance for Digital Public Infrastructure (DPI) systems — particularly in identity (e.g., MOSIP), consent management (e.g., DEPA), commerce (e.g., ONDC), finance (e.g., UPI/AA), and their interconnection with Value-Added Services (VAS) — a deep, technical and layered optimization strategy is essential. Optimization shall include and not limited to: 1) CPU, MEMORY, Storage, I/O Tuning. 2) Programming Language and Run time selection. 3) Choice of Frameworks, Libraries and Patterns. 4) Benchmarking tools and their KPIs. 5) Security Performance Considerations. 6) MOSIP-Specific Benchmarking & Optimization Practices. Establish DPI Performance Optimization Pyramid: [ Level 5 ] DPI Benchmark Harnesses (MOSIP, Sahamati, ONDC test suites), [ Level 4 ] Runtime tuning (GC, threads, batching, cold-start elimination), [ Level 3 ] Language + Libraries (Rust, Go, gRPC, Kafka, SIMD libs), [ Level 2 ] Software Architecture (async pipelines, microservices, stateless scaling), [ Level 1 ] Hardware Optimization (NUMA, AVX, cache alignment, I/O schedulers)',
                actionItems: 'Workload Optimization Support',
                actionOwnership: 'Infosys + Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            }
        ]
    }
};

// Global variables
let currentUser = null;
let currentMeetingId = null;
let meetings = [];
let isDetailView = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadMeetingsFromLive();
    fadeInPage('loginScreen');
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.addEventListener('click', () => {
            if (currentUser === 'admin') {
                document.getElementById('fileInput').click();
            }
        });
    }
    
    const uploadModal = document.getElementById('uploadModal');
    if (uploadModal) {
        uploadModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeUploadModal();
            }
        });
    }
}

// Page transition functions
function fadeInPage(pageId) {
    setTimeout(() => {
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('fade-in');
        }
    }, 100);
}

function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

function transitionToPage(fromId, toId) {
    showSpinner();
    
    const fromPage = document.getElementById(fromId);
    fromPage.classList.remove('fade-in');
    fromPage.style.opacity = '0';
    fromPage.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        fromPage.style.display = 'none';
        const toPage = document.getElementById(toId);
        toPage.style.display = fromId === 'loginScreen' ? 'block' : 'flex';
        toPage.style.opacity = '0';
        toPage.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hideSpinner();
            toPage.style.opacity = '1';
            toPage.style.transform = 'translateY(0)';
            fadeInPage(toId);
        }, 300);
    }, 400);
}

// Authentication functions
function showAdminForm() {
    const adminForm = document.getElementById('adminForm');
    adminForm.style.display = 'block';
    setTimeout(() => {
        adminForm.classList.add('show');
        document.getElementById('adminPassword').focus();
    }, 100);
}

function handlePasswordEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        loginAs('admin');
    }
}

function loginAs(role) {
    if (role === 'admin') {
        const password = document.getElementById('adminPassword').value;
        if (password !== '82201Domeyo@') {
            showNotification('Invalid administrator password!', 'error');
            document.getElementById('adminPassword').focus();
            return;
        }
    }
    
    currentUser = role;
    transitionToPage('loginScreen', 'mainApp');
    
    setTimeout(() => {
        document.getElementById('userRole').textContent = role === 'admin' ? 'Administrator' : 'Guest';
        
        // Show/hide admin controls
        if (role === 'admin') {
            document.getElementById('uploadBtn').style.display = 'flex';
            document.getElementById('exportBtn').style.display = 'flex';
            document.getElementById('detailExportBtn').style.display = 'flex';
        }
        
        // Show dashboard view initially
        showDashboardView();
        loadMeetings();
        showNotification(`Welcome ${role === 'admin' ? 'Administrator' : 'Guest'}! Access granted to Digital Public Infrastructure system.`);
    }, 800);
}

function logout() {
    currentUser = null;
    currentMeetingId = null;
    isDetailView = false;
    
    transitionToPage('mainApp', 'loginScreen');
    
    setTimeout(() => {
        document.getElementById('adminForm').style.display = 'none';
        document.getElementById('adminForm').classList.remove('show');
        document.getElementById('adminPassword').value = '';
        showDashboardView(); // Reset to dashboard view
    }, 800);
}

// View management
function showDashboardView() {
    document.getElementById('dashboardView').style.display = 'block';
    document.getElementById('detailView').style.display = 'none';
    isDetailView = false;
}

function showDetailView() {
    document.getElementById('dashboardView').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';
    isDetailView = true;
}

function goBackToDashboard() {
    showSpinner();
    
    setTimeout(() => {
        showDashboardView();
        currentMeetingId = null;
        hideSpinner();
        showNotification('Returned to Strategic Dashboard');
    }, 500);
}

// Data functions
function loadMeetingsFromLive() {
    meetings = [...liveMeetings];
}

function loadMeetings() {
    showSpinner();
    
    setTimeout(() => {
        loadMeetingsFromLive();
        displayMeetings();
        hideSpinner();
    }, 600);
}

function displayMeetings() {
    const contentArea = document.getElementById('contentArea');
    
    if (meetings.length === 0) {
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 80px 20px; color: #64748b;">
                <div style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(20px); border-radius: 20px; padding: 60px 40px; border: 1px solid rgba(229, 231, 235, 0.3);">
                    <i class="fas fa-clipboard-list" style="font-size: 64px; color: #cbd5e0; margin-bottom: 24px;"></i>
                    <h3 style="color: #374151; margin-bottom: 16px; font-size: 24px;">No meetings found</h3>
                    <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Upload your first Excel file to get started with the strategic planning system</p>
                    ${currentUser === 'admin' ? `
                        <button class="btn btn-primary" onclick="showUploadModal()" style="margin-top: 24px;">
                            <i class="fas fa-plus"></i> Upload Meeting
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        return;
    }
    
    contentArea.innerHTML = `
        <div class="meetings-grid">
            ${meetings.map((meeting, index) => `
                <div class="meeting-card-enhanced" onclick="viewMeeting('${meeting.id}')" style="animation-delay: ${index * 0.1}s;">
                    <div class="meeting-card-header">
                        <div class="meeting-icon">
                            <i class="fas fa-network-wired"></i>
                        </div>
                        <div class="meeting-title-section">
                            <h3 class="meeting-title">${meeting.title || meeting.filename}</h3>
                            <p class="meeting-subtitle">${meeting.subtitle || 'Strategic Planning Session'}</p>
                            <div class="meeting-metadata">
                                <span class="metadata-item">
                                    <i class="fas fa-calendar"></i>
                                    ${new Date(meeting.upload_date).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: 'numeric' 
                                    })}
                                </span>
                                <span class="metadata-item">
                                    <i class="fas fa-list-ol"></i>
                                    ${meeting.record_count} action items
                                </span>
                                <span class="metadata-item">
                                    <i class="fas fa-handshake"></i>
                                    Infosys × Netweb
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="meeting-actions" onclick="event.stopPropagation()">
                        <button class="action-btn primary" onclick="viewMeeting('${meeting.id}')">
                            <i class="fas fa-eye"></i>
                            <span>View Details</span>
                        </button>
                        ${currentUser === 'admin' ? `
                        <button class="action-btn secondary" onclick="exportMeeting('${meeting.id}')">
                            <i class="fas fa-download"></i>
                            <span>Export Data</span>
                        </button>
                        ` : ''}
                    </div>
                    
                    <div class="meeting-stats">
                        <div class="stat-item">
                            <span class="stat-label">Status</span>
                            <span class="stat-value active">Active</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Priority</span>
                            <span class="stat-value">High</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function viewMeeting(meetingId) {
    showSpinner();
    
    setTimeout(() => {
        const data = liveMeetingData[meetingId];
        if (data) {
            currentMeetingId = meetingId;
            showDetailView();
            displayMeetingTable(data);
        } else {
            showNotification('Meeting data not available', 'error');
        }
        hideSpinner();
    }, 600);
}

// Content formatting helper
function formatContent(text) {
    if (!text || typeof text !== 'string') return '<span style="color: #9ca3af; font-style: italic;">No content available</span>';
    
    // Split by periods and create paragraphs
    const sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
    
    if (sentences.length <= 1) {
        return `<div class="formatted-content">${text.trim()}</div>`;
    }
    
    const paragraphs = sentences.map(sentence => {
        const trimmed = sentence.trim();
        return trimmed ? `<p>${trimmed}.</p>` : '';
    }).filter(p => p);
    
    return `<div class="formatted-content">${paragraphs.join('')}</div>`;
}

function displayMeetingTable(data) {
    const detailContent = document.getElementById('detailContent');
    
    // Show loading animation first
    detailContent.innerHTML = `
        <div class="table-wrapper">
            <div class="table-header">
                <h2>${data.meeting.title || 'Minutes of Meeting'}</h2>
                <p>${data.meeting.subtitle || data.meeting.filename} • ${new Date(data.meeting.upload_date).toLocaleDateString()}</p>
            </div>
            
            <div style="padding: 40px; text-align: center; color: #475569;">
                <i class="fas fa-cogs" style="font-size: 32px; margin-bottom: 16px; animation: spin 2s linear infinite;"></i>
                <p style="font-size: 16px; font-weight: 600;">Analyzing content and optimizing table layout...</p>
                <p style="font-size: 14px; color: #64748b; margin-top: 8px;">Preparing strategic planning documentation</p>
            </div>
        </div>
    `;
    
    // After a brief moment, show the actual table
    setTimeout(() => {
        const tableHTML = `
            <div class="table-wrapper">
                <div class="table-header">
                    <h2>${data.meeting.title || 'Minutes of Meeting'}</h2>
                    <p>${data.meeting.subtitle || data.meeting.filename} • ${new Date(data.meeting.upload_date).toLocaleDateString()}</p>
                </div>
                
                ${data.meeting.description ? `
                <div class="table-description">
                    <p>${data.meeting.description}</p>
                </div>
                ` : ''}
                
                <div class="table-container-inner">
                    <table class="mom-table">
                        <thead>
                            <tr>
                                <th class="col-description">
                                    <i class="fas fa-file-text" style="margin-right: 8px; color: #475569;"></i>
                                    Description
                                </th>
                                <th class="col-action-items">
                                    <i class="fas fa-tasks" style="margin-right: 8px; color: #475569;"></i>
                                    Action Items
                                </th>
                                <th class="col-ownership">
                                    <i class="fas fa-users" style="margin-right: 8px; color: #475569;"></i>
                                    Action Ownership
                                </th>
                                <th class="col-date">
                                    <i class="fas fa-calendar-plus" style="margin-right: 8px; color: #475569;"></i>
                                    Start Date
                                </th>
                                <th class="col-date">
                                    <i class="fas fa-calendar-check" style="margin-right: 8px; color: #475569;"></i>
                                    End Date
                                </th>
                                <th class="col-remarks">
                                    <i class="fas fa-comment-alt" style="margin-right: 8px; color: #475569;"></i>
                                    Remarks/Challenges
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.data.map((row, index) => `
                                <tr style="animation-delay: ${index * 0.1}s;">
                                    <td class="col-description">
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.1}s;">
                                            ${formatContent(row.description)}
                                        </div>
                                    </td>
                                    <td class="col-action-items">
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.2}s;">
                                            ${formatContent(row.actionItems)}
                                        </div>
                                    </td>
                                    <td class="col-ownership">
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.3}s;">
                                            ${formatContent(row.actionOwnership)}
                                        </div>
                                    </td>
                                    <td class="col-date">
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.4}s;">
                                            ${formatDate(row.startDate) || '<span style="color: #9ca3af; font-style: italic;">Not set</span>'}
                                        </div>
                                    </td>
                                    <td class="col-date">
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.5}s;">
                                            ${formatDate(row.endDate) || '<span style="color: #9ca3af; font-style: italic;">Not set</span>'}
                                        </div>
                                    </td>
                                    <td class="col-remarks">
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.6}s;">
                                            ${formatContent(row.remarks)}
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        
        detailContent.innerHTML = tableHTML;
        
        // Smooth scroll to top of detail view
        document.getElementById('detailView').scrollIntoView({ behavior: 'smooth' });
        
    }, 800);
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Upload functions
function showUploadModal() {
    if (currentUser !== 'admin') return;
    const modal = document.getElementById('uploadModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function handleFileUpload(event) {
    if (currentUser !== 'admin') return;
    
    const file = event.target.files[0];
    if (!file) return;
    
    showSpinner();
    
    setTimeout(() => {
        showNotification('File upload feature requires backend integration. Current system displays stored meeting data.', 'warning');
        closeUploadModal();
        hideSpinner();
        event.target.value = '';
    }, 1500);
}

// Export functions
function exportMeeting(meetingId) {
    if (currentUser !== 'admin') {
        showNotification('Export is restricted to administrators only!', 'error');
        return;
    }
    
    showSpinner();
    
    setTimeout(() => {
        try {
            const meetingData = liveMeetingData[meetingId];
            
            if (!meetingData) {
                showNotification('Meeting data not found for export', 'error');
                hideSpinner();
                return;
            }
            
            // Create comprehensive CSV content
            let csvContent = '\uFEFF'; // UTF-8 BOM for proper encoding
            
            // Add header information
            csvContent += `"${meetingData.meeting.title || 'Minutes of Meeting'}"\n`;
            csvContent += `"${meetingData.meeting.subtitle || ''}"\n`;
            if (meetingData.meeting.description) {
                csvContent += `"${meetingData.meeting.description}"\n`;
            }
            csvContent += '\n';
            
            // Add column headers
            csvContent += 'Description,Action Items,Action Ownership,Start Date,End Date,Remarks\n';
            
            // Add data rows
            meetingData.data.forEach(row => {
                const cleanText = (text) => {
                    if (!text) return '';
                    return text.replace(/"/g, '""').replace(/\n/g, ' ').replace(/\r/g, ' ');
                };
                
                csvContent += `"${cleanText(row.description)}","${cleanText(row.actionItems)}","${cleanText(row.actionOwnership)}","${row.startDate || ''}","${row.endDate || ''}","${cleanText(row.remarks)}"\n`;
            });
            
            // Create and download the file
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `DPI_Strategy_Export_${new Date().toISOString().split('T')[0]}.csv`;
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            showNotification('Strategic planning data exported successfully!');
        } catch (error) {
            console.error('Export error:', error);
            showNotification('Export failed. Please try again.', 'error');
        }
        
        hideSpinner();
    }, 800);
}

function exportCurrentMeeting() {
    if (currentMeetingId) {
        exportMeeting(currentMeetingId);
    } else {
        showNotification('Please select a meeting first', 'error');
    }
}

function downloadTemplate() {
    const templateContent = '\uFEFF' + `Description,Action Items,Action Ownership,Start Date,End Date,Remarks
"Enter detailed description of the discussion point or agenda item here","List specific action items to be completed","Assign responsible person or team","YYYY-MM-DD","YYYY-MM-DD","Add any remarks or challenges"
"Example: Digital Public Infrastructure planning session","Establish technical architecture and implementation roadmap","Technical Team Lead","2025-07-15","2025-08-15","High priority - Strategic initiative for Q3"`;
    
    const blob = new Blob([templateContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Netweb_MoM_Template.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    showNotification('Meeting template downloaded successfully!');
}

// Notification functions
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 6000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}